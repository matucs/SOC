import { create } from 'zustand';

interface UiStore {
  isEventFormOpen: boolean;
  openEventForm: () => void;
  closeEventForm: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
  isEventFormOpen: false,
  openEventForm: () => set({ isEventFormOpen: true }),
  closeEventForm: () => set({ isEventFormOpen: false }),
}));
