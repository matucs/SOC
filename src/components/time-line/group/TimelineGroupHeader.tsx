import { memo } from 'react';
import { GROUP_HEADER_FOCUS } from '../constants/TimelineGroup.constants';
import type { TimelineGroupHeaderProps } from '../types/Timeline.types';
import { TimelineGroupHeaderContent } from './TimelineGroupHeaderContent';
import { getInitialTabIndex, groupHeaderA11yProps } from '../utils/timelineGroup.utils';
import { groupHeaderClass } from '../styles/TimelineGroup.styles';

export const TimelineGroupHeader = memo(function TimelineGroupHeader({
  label,
  itemCount,
  groupIndex,
  registerNode,
  onKeyDown,
}: TimelineGroupHeaderProps) {
  return (
    <div
      ref={(el) => registerNode(groupIndex, GROUP_HEADER_FOCUS, el)}
      tabIndex={getInitialTabIndex(groupIndex, GROUP_HEADER_FOCUS)}
      onKeyDown={onKeyDown}
      className={groupHeaderClass}
      {...groupHeaderA11yProps(label, itemCount)}
    >
      <TimelineGroupHeaderContent label={label} itemCount={itemCount} />
    </div>
  );
});
