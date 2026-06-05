import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { TimelineGroupData, TimelineNavGroup } from '../types/Timeline.types';
import { isTimelineNavKey } from '../constants/TimelineKeyboard.constants';
import { toNavGroups } from '../utils/timeline.utils';
import {
  createFocusAnnouncement,
  resolveNextFocus,
  scheduleAnnouncement,
} from '../utils/timelineKeyboard.utils';

const INITIAL_FOCUS_KEY = '0:-1';

function focusKey(groupIndex: number, itemIndex: number): string {
  return `${groupIndex}:${itemIndex}`;
}

function parseFocusKey(key: string): { group: number; item: number } {
  const [group, item] = key.split(':');
  return { group: Number(group), item: Number(item) };
}

/** Imperative roving-tabindex focus — no React state, zero re-renders on keyboard navigation. */
export function useTimelineFocus(groups: TimelineGroupData[]) {
  const navGroups = useMemo(() => toNavGroups(groups), [groups]);
  const navGroupsRef = useRef<TimelineNavGroup[]>(navGroups);
  useEffect(() => {
    navGroupsRef.current = navGroups;
  }, [navGroups]);

  const liveRegionRef = useRef<HTMLDivElement | null>(null);
  const nodeMap = useRef(new Map<string, HTMLElement | null>());
  const activeKey = useRef(INITIAL_FOCUS_KEY);

  const moveFocus = useCallback((groupIndex: number, itemIndex: number) => {
    const newKey = focusKey(groupIndex, itemIndex);
    if (activeKey.current === newKey) return;

    const oldNode = nodeMap.current.get(activeKey.current);
    if (oldNode) oldNode.tabIndex = -1;

    activeKey.current = newKey;

    const newNode = nodeMap.current.get(newKey);
    if (newNode) {
      newNode.tabIndex = 0;
      newNode.focus();
    }

    const message = createFocusAnnouncement(groupIndex, itemIndex, navGroupsRef.current);
    if (message) scheduleAnnouncement(liveRegionRef.current, message);
  }, []);

  const registerNode = useCallback(
    (groupIndex: number, itemIndex: number, el: HTMLElement | null) => {
      const key = focusKey(groupIndex, itemIndex);

      if (!el) {
        nodeMap.current.delete(key);
        return;
      }

      nodeMap.current.set(key, el);
      el.onfocus = () => {
        if (activeKey.current !== key) {
          moveFocus(groupIndex, itemIndex);
        }
      };
    },
    [moveFocus],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isTimelineNavKey(e.key)) return;

      e.preventDefault();

      const { group, item } = parseFocusKey(activeKey.current);
      const next = resolveNextFocus(e.key, group, item, navGroupsRef.current);
      if (next) moveFocus(next.group, next.item);
    },
    [moveFocus],
  );

  return {
    registerNode,
    handleKeyDown,
    liveRegionRef,
  };
}
