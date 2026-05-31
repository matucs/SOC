import { memo } from 'react';
import type { TimelineProps } from './types/Timeline.types';
import { TimelineGroup } from './group';
import { TimelineHeader } from './header';
import { TimelineEmpty } from './empty';
import { useTimeline } from './hooks/useTimeline';
import { ARIA_TIMELINE } from './strings/Timeline.strings';
import { timelineContainerClass, timelineLiveRegionClass, timelineScrollClass } from './styles/Timeline.styles';

export const Timeline = memo(function Timeline({ events }: TimelineProps) {
  const {
    groups,
    focusedGroup,
    focusedItem,
    announcement,
    handleGroupKeyDown,
    handleItemFocus,
    handleGroupFocus,
  } = useTimeline(events);

  if (events.length === 0) {
    return <TimelineEmpty />;
  }

  return (
    <section aria-label={ARIA_TIMELINE} className={timelineContainerClass}>
      <div aria-live="polite" aria-atomic="true" className={timelineLiveRegionClass}>
        {announcement}
      </div>

      <TimelineHeader eventCount={events.length} groupCount={groups.length} />

      <div className={timelineScrollClass}>
        {groups.map((group, gi) => (
          <TimelineGroup
            key={group.date}
            group={group}
            groupIndex={gi}
            isFocused={focusedGroup === gi}
            focusedItem={focusedGroup === gi ? focusedItem : -1}
            onKeyDown={handleGroupKeyDown}
            onItemFocus={handleItemFocus}
            onGroupFocus={handleGroupFocus}
          />
        ))}
      </div>
    </section>
  );
});
