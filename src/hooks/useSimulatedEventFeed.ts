import { useEffect, useRef } from 'react';
import { createRandomEvent } from '../data/createRandomEvent';
import { useEventStore } from '../store/useEventStore';
import {
  SIMULATED_FEED_MIN_INTERVAL_MS,
  SIMULATED_FEED_MAX_INTERVAL_MS,
} from './SimulatedEventFeed.constants';

export interface UseSimulatedEventFeedOptions {
  /** When false, the feed is paused */
  enabled?: boolean;
  /** When true, timeline stays in sync immediately; when false, defer until form closes. */
  refreshTimeline?: boolean;
}

function randomIntervalMs(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function useSimulatedEventFeed({
  enabled = true,
  refreshTimeline = true,
}: UseSimulatedEventFeedOptions = {}): void {
  const addEvent = useEventStore((s) => s.addEvent);
  const refreshTimelineRef = useRef(refreshTimeline);
  useEffect(() => {
    refreshTimelineRef.current = refreshTimeline;
  });

  useEffect(() => {
    if (!enabled) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        addEvent(createRandomEvent(), {
          refreshTimeline: refreshTimelineRef.current,
        });
        scheduleNext();
      }, randomIntervalMs(SIMULATED_FEED_MIN_INTERVAL_MS, SIMULATED_FEED_MAX_INTERVAL_MS));
    };

    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, [enabled, addEvent]);
}
