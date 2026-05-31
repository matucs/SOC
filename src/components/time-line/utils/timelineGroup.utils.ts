import { GROUP_HEADER_FOCUS } from '../constants/TimelineGroup.constants';
import { groupAriaLabel } from '../strings/TimelineGroup.strings';

export const GROUP_HEADER_TAB_INDEX_FOCUSED = 0;
export const GROUP_HEADER_TAB_INDEX_UNFOCUSED = -1;

export function isGroupHeaderFocused(isFocused: boolean, focusedItem: number): boolean {
  return isFocused && focusedItem === GROUP_HEADER_FOCUS;
}

export function isTimelineItemFocused(
  isFocused: boolean,
  focusedItem: number,
  itemIndex: number,
): boolean {
  return isFocused && focusedItem === itemIndex;
}

export function getGroupHeaderTabIndex(isHeaderFocused: boolean): number {
  return isHeaderFocused ? GROUP_HEADER_TAB_INDEX_FOCUSED : GROUP_HEADER_TAB_INDEX_UNFOCUSED;
}

export function groupHeaderA11yProps(label: string, itemCount: number) {
  return {
    'aria-label': groupAriaLabel(label, itemCount),
  } as const;
}
