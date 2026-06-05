import type { TimelineItemDotProps } from '../types/Timeline.types';
import {
  itemDotColClass,
  itemDotColStyle,
  itemDotClass,
  getSeverityDotStyle,
} from '../styles/TimelineItem.styles';

export const TimelineItemDot = ({ severity }: TimelineItemDotProps) => (
  <div className={itemDotColClass} style={itemDotColStyle}>
    <div className={itemDotClass} style={getSeverityDotStyle(severity)} />
  </div>
);
