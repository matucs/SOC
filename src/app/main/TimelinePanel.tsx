import { memo } from 'react';
import { useEventStore } from '../../store/useEventStore';
import { Timeline } from '../../components/time-line';

export const TimelinePanel = memo(function TimelinePanel() {
  const events = useEventStore((s) => s.timelineEvents);

  return <Timeline events={events} />;
});
