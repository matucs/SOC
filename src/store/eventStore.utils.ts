import type { SecurityEvent } from '../data/types';

export function createEventId(events: SecurityEvent[]): string {
  return `EVT-${String(events.length + 1).padStart(4, '0')}`;
}

export function prependEvent(
  events: SecurityEvent[],
  event: SecurityEvent,
): SecurityEvent[] {
  return [event, ...events];
}
