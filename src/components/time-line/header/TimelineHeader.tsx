import type { TimelineHeaderProps } from '../types/Timeline.types';
import {
  EVENTS_ACROSS,
  DAYS_SUFFIX,
  KEYBOARD_HINT,
} from '../strings/Timeline.strings';
import {
  timelineHeaderClass,
  timelineHeaderStyle,
  timelineCounterClass,
  timelineCountHighlightClass,
  timelineGroupCountHighlightClass,
  timelineHintClass,
} from '../styles/Timeline.styles';

export const TimelineHeader = ({ eventCount, groupCount }: TimelineHeaderProps) => (
  <div className={timelineHeaderClass} style={timelineHeaderStyle}>
    <span className={timelineCounterClass}>
      <span className={timelineCountHighlightClass}>{eventCount}</span>
      {' '}{EVENTS_ACROSS}{' '}
      <span className={timelineGroupCountHighlightClass}>{groupCount}</span>
      {' '}{DAYS_SUFFIX}
    </span>
    <span className={timelineHintClass}>{KEYBOARD_HINT}</span>
  </div>
);
