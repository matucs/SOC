import { create } from 'zustand';
import type { SecurityEvent } from '../data/types';
import { INITIAL_EVENTS } from '../data/mockEvents';
import type { EventStore } from './eventStore.types';
import { createEventId, prependEvent } from './eventStore.utils';

export type { AddEventOptions, EventStore } from './eventStore.types';

export const useEventStore = create<EventStore>((set) => ({
  gridEvents: INITIAL_EVENTS,
  timelineEvents: INITIAL_EVENTS,

  addEvent: (eventData, options) => {
    set((state) => {
      const newEvent: SecurityEvent = {
        ...eventData,
        id: createEventId(state.gridEvents),
      };
      const gridEvents = prependEvent(state.gridEvents, newEvent);

      return {
        gridEvents,
        ...(options?.refreshTimeline ? { timelineEvents: gridEvents } : {}),
      };
    });
  },

  syncTimeline: () =>
    set((state) =>
      state.timelineEvents === state.gridEvents
        ? state
        : { timelineEvents: state.gridEvents },
    ),
}));
