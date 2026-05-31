import { memo } from 'react';
import type { TimelineGroupHeaderContentProps } from '../types/Timeline.types';
import {
  groupLabelClass,
  groupLabelStyle,
  groupDividerClass,
  groupDividerStyle,
  groupCountBadgeClass,
  groupCountBadgeStyle,
} from '../styles/TimelineGroup.styles';

export const TimelineGroupHeaderContent = memo(function TimelineGroupHeaderContent({
  label,
  itemCount,
}: TimelineGroupHeaderContentProps) {
  return (
    <>
      <span className={groupLabelClass} style={groupLabelStyle}>
        {label}
      </span>
      <div className={groupDividerClass} style={groupDividerStyle} aria-hidden />
      <span className={groupCountBadgeClass} style={groupCountBadgeStyle}>
        {itemCount}
      </span>
    </>
  );
});
