import { memo, useCallback } from 'react';
import type { TimelineGroupProps } from '../types/Timeline.types';
import { TimelineGroupHeader } from './TimelineGroupHeader';
import { TimelineGroupItems } from './TimelineGroupItems';
import { isGroupHeaderFocused } from '../utils/timelineGroup.utils';
import { groupContainerClass } from '../styles/TimelineGroup.styles';

export const TimelineGroup = memo(function TimelineGroup({
  group,
  groupIndex,
  isFocused,
  focusedItem,
  onKeyDown,
  onItemFocus,
  onGroupFocus,
}: TimelineGroupProps) {
  const handleHeaderFocus = useCallback(() => {
    onGroupFocus(groupIndex);
  }, [groupIndex, onGroupFocus]);

  return (
    <div className={groupContainerClass}>
      <TimelineGroupHeader
        label={group.label}
        itemCount={group.items.length}
        isHeaderFocused={isGroupHeaderFocused(isFocused, focusedItem)}
        onFocus={handleHeaderFocus}
        onKeyDown={onKeyDown}
      />

      <TimelineGroupItems
        group={group}
        groupIndex={groupIndex}
        isFocused={isFocused}
        focusedItem={focusedItem}
        onItemFocus={onItemFocus}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});
