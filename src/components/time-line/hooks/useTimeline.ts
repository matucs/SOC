import { useMemo, useCallback, useRef, useEffect } from 'react';
import type { SecurityEvent } from '../../../data/types';
import type { UseTimelineReturn } from '../types/Timeline.types';
import { useTimelineKeyboard } from './useTimelineKeyboard';
import { groupByDay, toNavGroups } from '../utils/timeline.utils';

export function useTimeline(events: SecurityEvent[]): UseTimelineReturn {
  const groups = useMemo(() => groupByDay(events), [events]);
  const navGroups = useMemo(() => toNavGroups(groups), [groups]);

  const navGroupsRef = useRef(navGroups);
  useEffect(() => {
    navGroupsRef.current = navGroups;
  }, [navGroups]);

  const { focusedGroup, focusedItem, announcement, handleKeyDown, setFocus } =
    useTimelineKeyboard();

  const handleGroupKeyDown = useCallback(
    (e: React.KeyboardEvent) => handleKeyDown(e, navGroupsRef.current),
    [handleKeyDown],
  );

  const handleItemFocus = useCallback(
    (groupIndex: number, itemIndex: number) =>
      setFocus(groupIndex, itemIndex, navGroupsRef.current),
    [setFocus],
  );

  const handleGroupFocus = useCallback(
    (groupIndex: number) => setFocus(groupIndex, -1, navGroupsRef.current),
    [setFocus],
  );

  return {
    groups,
    focusedGroup,
    focusedItem,
    announcement,
    handleGroupKeyDown,
    handleItemFocus,
    handleGroupFocus,
  };
}
