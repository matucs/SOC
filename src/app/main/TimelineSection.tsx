import { memo } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { SectionClockIcon } from '../../components/ui/icons';
import { SECTION_TIMELINE, ARIA_EVENT_TIMELINE } from '../App.strings';
import { timelineSectionClass, timelineContentClass } from '../App.styles';
import { TimelinePanel } from './TimelinePanel';

const timelineIcon = <SectionClockIcon />;

export const TimelineSection = memo(function TimelineSection() {
  return (
    <section className={timelineSectionClass} aria-label={ARIA_EVENT_TIMELINE}>
      <SectionHeader icon={timelineIcon} title={SECTION_TIMELINE} />
      <div className={timelineContentClass}>
        <TimelinePanel />
      </div>
    </section>
  );
});
