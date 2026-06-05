import type { TimelineNavGroup, TimelineNavItem } from '../types/Timeline.types';
import { announceGroup, announceItem } from '../strings/Timeline.strings';
import { GROUP_HEADER_FOCUS } from '../constants/TimelineGroup.constants';

export function scheduleAnnouncement(liveRegion: HTMLElement | null, message: string): void {
  if (!liveRegion) return;

  liveRegion.textContent = '';
  requestAnimationFrame(() => {
    liveRegion.textContent = message;
  });
}

function announceGroupFocus(group: TimelineNavGroup): string {
  return announceGroup(group.label, group.items.length);
}

function announceItemFocus(item: TimelineNavItem): string {
  return announceItem(item.title, item.severity, item.location);
}

export function createFocusAnnouncement(
  groupIndex: number,
  itemIndex: number,
  groups: TimelineNavGroup[],
): string | null {
  const group = groups[groupIndex];
  if (!group) return null;

  if (itemIndex === GROUP_HEADER_FOCUS) {
    return announceGroupFocus(group);
  }

  const item = group.items[itemIndex];
  return item ? announceItemFocus(item) : null;
}
