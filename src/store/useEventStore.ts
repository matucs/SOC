import { create } from 'zustand';
import { INITIAL_EVENTS } from '../data/mockEvents';
import type { EventStore } from './eventStore.types';
import {
  applyAddEvent,
  applyUpdateEvent,
  createInitialTimelineEvents,
} from './eventStore.utils';

export type { AddEventOptions, EventStore } from './eventStore.types';

export const useEventStore = create<EventStore>((set) => ({
  gridEvents: INITIAL_EVENTS,
  timelineEvents: createInitialTimelineEvents(INITIAL_EVENTS),

  addEvent: (eventData, options) => {
    set((state) => applyAddEvent(state, eventData, options));
  },

  updateEvent: (id, eventData, options) => {
    set((state) => applyUpdateEvent(state, id, eventData, options));
  },

  syncTimeline: () =>
    set((state) =>
      state.timelineEvents === state.gridEvents
        ? state
        : { timelineEvents: state.gridEvents },
    ),
}));
