import React from 'react';
import type { TimelineItemDotProps } from '../types/Timeline.types';
import {
  itemDotColClass,
  itemDotColStyle,
  itemDotClass,
  getSeverityDotStyle,
} from '../styles/TimelineItem.styles';

export const TimelineItemDot: React.FC<TimelineItemDotProps> = ({ severity }) => (
  <div className={itemDotColClass} style={itemDotColStyle}>
    <div className={itemDotClass} style={getSeverityDotStyle(severity)} />
  </div>
);
