import { memo } from 'react';
import type { TimelineGroupProps } from '../types/Timeline.types';
import { TimelineGroupHeader } from './TimelineGroupHeader';
import { TimelineGroupItems } from './TimelineGroupItems';
import { groupContainerClass } from '../styles/TimelineGroup.styles';

export const TimelineGroup = memo(function TimelineGroup({
  group,
  groupIndex,
  registerNode,
  onKeyDown,
}: TimelineGroupProps) {
  return (
    <div className={groupContainerClass}>
      <TimelineGroupHeader
        label={group.label}
        itemCount={group.items.length}
        groupIndex={groupIndex}
        registerNode={registerNode}
        onKeyDown={onKeyDown}
      />

      <TimelineGroupItems
        group={group}
        groupIndex={groupIndex}
        registerNode={registerNode}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});
