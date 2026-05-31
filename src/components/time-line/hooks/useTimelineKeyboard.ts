import { useState, useCallback, useRef } from 'react';
import type { TimelineNavGroup, UseTimelineKeyboardReturn } from '../types/Timeline.types';
import {
  TIMELINE_INITIAL_GROUP,
  TIMELINE_INITIAL_ITEM,
  isTimelineNavKey,
} from '../constants/TimelineKeyboard.constants';
import {
  createFocusAnnouncement,
  resolveNextFocus,
  scheduleAnnouncement,
} from '../utils/timelineKeyboard.utils';

export function useTimelineKeyboard(): UseTimelineKeyboardReturn {
  const [focusedGroup, setFocusedGroup] = useState(TIMELINE_INITIAL_GROUP);
  const [focusedItem, setFocusedItem] = useState(TIMELINE_INITIAL_ITEM);
  const [announcement, setAnnouncement] = useState('');

  const focusRef = useRef({ group: TIMELINE_INITIAL_GROUP, item: TIMELINE_INITIAL_ITEM });

  const announce = useCallback((message: string) => {
    scheduleAnnouncement(setAnnouncement, message);
  }, []);

  const setFocus = useCallback(
    (group: number, item: number, groups: TimelineNavGroup[]) => {
      focusRef.current = { group, item };
      setFocusedGroup(group);
      setFocusedItem(item);

      const message = createFocusAnnouncement(group, item, groups);
      if (message) announce(message);
    },
    [announce],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, groups: TimelineNavGroup[]) => {
      if (!isTimelineNavKey(e.key)) return;

      e.preventDefault();

      const { group, item } = focusRef.current;
      const next = resolveNextFocus(e.key, group, item, groups);
      if (next) setFocus(next.group, next.item, groups);
    },
    [setFocus],
  );

  return { focusedGroup, focusedItem, announcement, handleKeyDown, setFocus };
}
