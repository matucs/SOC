import type { SecurityEvent } from '../data/types';

export interface AddEventOptions {
  /** When true, timeline receives the same update as the grid immediately. */
  refreshTimeline?: boolean;
}

export interface EventStoreState {
  gridEvents: SecurityEvent[];
  timelineEvents: SecurityEvent[];
}

export interface EventStoreActions {
  addEvent: (event: Omit<SecurityEvent, 'id'>, options?: AddEventOptions) => void;
  updateEvent: (
    id: string,
    event: Omit<SecurityEvent, 'id'>,
    options?: AddEventOptions,
  ) => void;
  syncTimeline: () => void;
}

export type EventStore = EventStoreState & EventStoreActions;
