import { format } from 'date-fns';
import type { TimelineGroupData, TimelineNavGroup } from '../types/Timeline.types';

function toNavGroup(group: TimelineGroupData): TimelineNavGroup {
  return {
    date: group.date,
    label: group.label,
    items: group.items.map((ev) => ({
      id: ev.id,
      title: ev.title,
      severity: ev.severity,
      location: ev.location,
    })),
  };
}

export function toNavGroups(groups: TimelineGroupData[]): TimelineNavGroup[] {
  return groups.map(toNavGroup);
}

export function groupByDay<T extends { timestamp: Date }>(
  items: T[],
): Array<{ date: string; label: string; items: T[] }> {
  const map = new Map<string, T[]>();

  for (const item of items) {
    const key = format(item.timestamp, 'yyyy-MM-dd');
    const existing = map.get(key);
    if (existing) {
      existing.push(item);
    } else {
      map.set(key, [item]);
    }
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, groupItems]) => ({
      date,
      label: format(new Date(date + 'T12:00:00'), 'EEEE, MMMM d, yyyy'),
      items: groupItems,
    }));
}
