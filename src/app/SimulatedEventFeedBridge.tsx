import { useUiStore } from '../store/useUiStore';
import { useSimulatedEventFeed } from '../hooks/useSimulatedEventFeed';

/** Keeps the simulated feed in sync with form-open state without re-rendering App. */
export function SimulatedEventFeedBridge() {
  const isEventFormOpen = useUiStore((s) => s.isEventFormOpen);
  useSimulatedEventFeed({ refreshTimeline: !isEventFormOpen });
  return null;
}
