import { create } from 'zustand';

interface UiStore {
  isEventFormOpen: boolean;
  editingEventId: string | null;
  openEventForm: () => void;
  openEditEventForm: (eventId: string) => void;
  closeEventForm: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
  isEventFormOpen: false,
  editingEventId: null,
  openEventForm: () => set({ isEventFormOpen: true, editingEventId: null }),
  openEditEventForm: (eventId) =>
    set({ isEventFormOpen: true, editingEventId: eventId }),
  closeEventForm: () => set({ isEventFormOpen: false, editingEventId: null }),
}));
