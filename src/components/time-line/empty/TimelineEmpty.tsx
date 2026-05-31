import type { TimelineEmptyProps } from '../types/Timeline.types';
import { EMPTY_TEXT } from '../strings/Timeline.strings';
import { timelineEmptyClass } from '../styles/Timeline.styles';

export const TimelineEmpty = ({ message = EMPTY_TEXT }: TimelineEmptyProps) => (
  <div className={timelineEmptyClass}>{message}</div>
);
