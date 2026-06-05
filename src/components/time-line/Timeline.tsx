import { memo, useMemo } from 'react';
import type { TimelineProps } from './types/Timeline.types';
import { TimelineGroup } from './group';
import { TimelineHeader } from './header';
import { TimelineEmpty } from './empty';
import { useTimelineFocus } from './hooks/useTimelineFocus';
import { groupByDay } from './utils/timeline.utils';
import { ARIA_TIMELINE } from './strings/Timeline.strings';
import {
  timelineContainerClass,
  timelineLiveRegionClass,
  timelineScrollClass,
} from './styles/Timeline.styles';

export const Timeline = memo(function Timeline({ events }: TimelineProps) {
  const groups = useMemo(() => groupByDay(events), [events]);
  const { registerNode, handleKeyDown, liveRegionRef } = useTimelineFocus(groups);

  if (events.length === 0) {
    return <TimelineEmpty />;
  }

  return (
    <section aria-label={ARIA_TIMELINE} className={timelineContainerClass}>
      <div
        ref={liveRegionRef}
        aria-live="polite"
        aria-atomic="true"
        className={timelineLiveRegionClass}
      />

      <TimelineHeader eventCount={events.length} groupCount={groups.length} />

      <div className={timelineScrollClass}>
        {groups.map((group, gi) => (
          <TimelineGroup
            key={group.date}
            group={group}
            groupIndex={gi}
            registerNode={registerNode}
            onKeyDown={handleKeyDown}
          />
        ))}
      </div>
    </section>
  );
});
