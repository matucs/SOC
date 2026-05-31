import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CLOCK_INTERVAL_MS, CLOCK_DATE_FORMAT } from '../App.constants';
import { liveClockClass } from '../App.styles';

export const LiveClock = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), CLOCK_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={liveClockClass}>
      {format(time, CLOCK_DATE_FORMAT)}
    </span>
  );
};
