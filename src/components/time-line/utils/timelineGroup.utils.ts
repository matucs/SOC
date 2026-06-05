import { GROUP_HEADER_FOCUS } from '../constants/TimelineGroup.constants';
import { groupAriaLabel } from '../strings/TimelineGroup.strings';

export function getInitialTabIndex(groupIndex: number, itemIndex: number): number {
  return groupIndex === 0 && itemIndex === GROUP_HEADER_FOCUS ? 0 : -1;
}

export function groupHeaderA11yProps(label: string, itemCount: number) {
  return {
    'aria-label': groupAriaLabel(label, itemCount),
  } as const;
}
