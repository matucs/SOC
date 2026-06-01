import type { SecurityEvent } from '../data/types';
import type { AddEventOptions, EventStoreState } from './eventStore.types';
import { TIMELINE_INITIAL_COUNT } from './eventStore.constants';

export function createEventId(events: SecurityEvent[]): string {
  return `EVT-${String(events.length + 1).padStart(4, '0')}`;
}

export function prependEvent(
  events: SecurityEvent[],
  event: SecurityEvent,
): SecurityEvent[] {
  return [event, ...events];
}

export function replaceEvent(
  events: SecurityEvent[],
  id: string,
  patch: Omit<SecurityEvent, 'id'>,
): SecurityEvent[] {
  return events.map((event) =>
    event.id === id ? { ...event, ...patch, id } : event,
  );
}

export function createInitialTimelineEvents(
  gridEvents: SecurityEvent[],
): SecurityEvent[] {
  return gridEvents.slice(0, TIMELINE_INITIAL_COUNT);
}

export function applyAddEvent(
  state: EventStoreState,
  eventData: Omit<SecurityEvent, 'id'>,
  options?: AddEventOptions,
): Partial<EventStoreState> {
  const newEvent: SecurityEvent = {
    ...eventData,
    id: createEventId(state.gridEvents),
  };
  const gridEvents = prependEvent(state.gridEvents, newEvent);

  if (!options?.refreshTimeline) {
    return { gridEvents };
  }

  return { gridEvents, timelineEvents: gridEvents };
}

export function applyUpdateEvent(
  state: EventStoreState,
  id: string,
  eventData: Omit<SecurityEvent, 'id'>,
  options?: AddEventOptions,
): Partial<EventStoreState> {
  const gridEvents = replaceEvent(state.gridEvents, id, eventData);
  const timelineEvents = options?.refreshTimeline
    ? replaceEvent(state.timelineEvents, id, eventData)
    : state.timelineEvents;

  return { gridEvents, timelineEvents };
}
