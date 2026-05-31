import { memo } from 'react';
import { useUiStore } from '../store/useUiStore';
import { EventFormContent } from '../components/event-form/EventFormContent';

/** Separate React branch — App tree never re-renders when the form opens or validates. */
export const EventFormOverlay = memo(function EventFormOverlay() {
  const isOpen = useUiStore((s) => s.isEventFormOpen);

  if (!isOpen) return null;
  return <EventFormContent />;
});
