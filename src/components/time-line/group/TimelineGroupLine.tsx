import { memo } from 'react';
import { groupLineClass, groupLineStyle } from '../styles/TimelineGroup.styles';

export const TimelineGroupLine = memo(function TimelineGroupLine() {
  return <div className={groupLineClass} style={groupLineStyle} aria-hidden />;
});
