import { memo } from 'react';
import type { TimelineItemProps } from '../types/Timeline.types';
import { TimelineItemDot } from './TimelineItemDot';
import { TimelineItemCard } from './TimelineItemCard';
import { formatRelativeTime } from '../utils/timelineItem.utils';
import { itemRowClass } from '../styles/TimelineItem.styles';

export const TimelineItem = memo(function TimelineItem({
  event,
  itemIndex,
  groupIndex,
  isFocused,
  onItemFocus,
  onKeyDown,
}: TimelineItemProps) {
  const relativeTime = formatRelativeTime(event.timestamp);

  return (
    <div className={itemRowClass}>
      <TimelineItemDot severity={event.severity} />
      <TimelineItemCard
        event={event}
        relativeTime={relativeTime}
        isFocused={isFocused}
        onFocus={() => onItemFocus(groupIndex, itemIndex)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});
