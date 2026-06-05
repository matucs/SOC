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
  registerNode,
  onKeyDown,
}: TimelineItemProps) {
  const relativeTime = formatRelativeTime(event.timestamp);

  return (
    <div className={itemRowClass}>
      <TimelineItemDot severity={event.severity} />
      <TimelineItemCard
        event={event}
        relativeTime={relativeTime}
        groupIndex={groupIndex}
        itemIndex={itemIndex}
        registerNode={registerNode}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});
