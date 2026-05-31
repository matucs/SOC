import { memo } from 'react';
import type { TimelineGroupItemsProps } from '../types/Timeline.types';
import { TimelineItem } from '../item';
import { isTimelineItemFocused } from '../utils/timelineGroup.utils';
import { TimelineGroupLine } from './TimelineGroupLine';
import { groupItemsClass } from '../styles/TimelineGroup.styles';

export const TimelineGroupItems = memo(function TimelineGroupItems({
  group,
  groupIndex,
  isFocused,
  focusedItem,
  onItemFocus,
  onKeyDown,
}: TimelineGroupItemsProps) {
  return (
    <div className={groupItemsClass}>
      <TimelineGroupLine />
      {group.items.map((event, itemIndex) => (
        <TimelineItem
          key={event.id}
          event={event}
          itemIndex={itemIndex}
          groupIndex={groupIndex}
          isFocused={isTimelineItemFocused(isFocused, focusedItem, itemIndex)}
          onItemFocus={onItemFocus}
          onKeyDown={onKeyDown}
        />
      ))}
    </div>
  );
});
