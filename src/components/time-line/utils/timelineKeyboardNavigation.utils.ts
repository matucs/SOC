import type { TimelineFocusPosition, TimelineNavGroup } from '../types/Timeline.types';
import { GROUP_HEADER_FOCUS } from '../constants/TimelineGroup.constants';
import {
  TIMELINE_KEY_DOWN,
  TIMELINE_KEY_LEFT,
  TIMELINE_KEY_RIGHT,
  TIMELINE_KEY_UP,
  type TimelineNavKey,
} from '../constants/TimelineKeyboard.constants';

function focusGroupHeader(groupIndex: number): TimelineFocusPosition {
  return { group: groupIndex, item: GROUP_HEADER_FOCUS };
}

function resolveHorizontalFocus(
  direction: 'prev' | 'next',
  groupIndex: number,
  groups: TimelineNavGroup[],
): TimelineFocusPosition | null {
  const nextGroup =
    direction === 'next'
      ? Math.min(groupIndex + 1, groups.length - 1)
      : Math.max(groupIndex - 1, 0);

  return nextGroup !== groupIndex ? focusGroupHeader(nextGroup) : null;
}

function resolveVerticalFocus(
  direction: 'up' | 'down',
  groupIndex: number,
  itemIndex: number,
  group: TimelineNavGroup,
): TimelineFocusPosition {
  if (direction === 'down') {
    const maxItem = group.items.length - 1;
    return { group: groupIndex, item: Math.min(itemIndex + 1, maxItem) };
  }

  return { group: groupIndex, item: Math.max(itemIndex - 1, GROUP_HEADER_FOCUS) };
}

export function resolveNextFocus(
  key: TimelineNavKey,
  groupIndex: number,
  itemIndex: number,
  groups: TimelineNavGroup[],
): TimelineFocusPosition | null {
  const currentGroup = groups[groupIndex];
  if (!currentGroup) return null;

  switch (key) {
    case TIMELINE_KEY_RIGHT:
      return resolveHorizontalFocus('next', groupIndex, groups);
    case TIMELINE_KEY_LEFT:
      return resolveHorizontalFocus('prev', groupIndex, groups);
    case TIMELINE_KEY_DOWN:
      return resolveVerticalFocus('down', groupIndex, itemIndex, currentGroup);
    case TIMELINE_KEY_UP:
      return resolveVerticalFocus('up', groupIndex, itemIndex, currentGroup);
    default:
      return null;
  }
}
