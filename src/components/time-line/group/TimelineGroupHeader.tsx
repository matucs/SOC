import { memo } from 'react';
import { useFocusWhen } from '../../../hooks/useFocusWhen';
import type { TimelineGroupHeaderProps } from '../types/Timeline.types';
import { TimelineGroupHeaderContent } from './TimelineGroupHeaderContent';
import {
  getGroupHeaderTabIndex,
  groupHeaderA11yProps,
} from '../utils/timelineGroup.utils';
import { getGroupHeaderClass } from '../styles/TimelineGroup.styles';

export const TimelineGroupHeader = memo(function TimelineGroupHeader({
  label,
  itemCount,
  isHeaderFocused,
  onFocus,
  onKeyDown,
}: TimelineGroupHeaderProps) {
  const headerRef = useFocusWhen<HTMLDivElement>(isHeaderFocused);

  return (
    <div
      ref={headerRef}
      tabIndex={getGroupHeaderTabIndex(isHeaderFocused)}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      className={getGroupHeaderClass(isHeaderFocused)}
      {...groupHeaderA11yProps(label, itemCount)}
    >
      <TimelineGroupHeaderContent label={label} itemCount={itemCount} />
    </div>
  );
});
