import { useState, useEffect, useRef } from 'react';
import type { EventCounterProps } from '../App.types';
import { BUMP_DURATION_MS } from '../App.constants';
import { EVENTS_LOADED_SUFFIX } from '../App.strings';
import {
  eventCounterClass,
  eventCounterBumpClass,
  eventCounterStyle,
  eventCounterHighlightStyle,
} from '../App.styles';

export const EventCounter = ({ count }: EventCounterProps) => {
  const prevRef = useRef(count);
  const [bumping, setBumping] = useState(false);

  useEffect(() => {
    if (count !== prevRef.current) {
      prevRef.current = count;
      setBumping(true);
      const id = setTimeout(() => setBumping(false), BUMP_DURATION_MS);
      return () => clearTimeout(id);
    }
  }, [count]);

  return (
    <span
      className={`${eventCounterClass} ${bumping ? eventCounterBumpClass : ''}`}
      style={eventCounterStyle}
    >
      <span style={eventCounterHighlightStyle}>{count}</span> {EVENTS_LOADED_SUFFIX}
    </span>
  );
};
