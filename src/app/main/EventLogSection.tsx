import { memo } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { GridIcon } from '../../components/ui/icons';
import { SECTION_EVENT_LOG, ARIA_EVENT_LOG } from '../App.strings';
import { sectionClass, gridContentClass } from '../App.styles';
import { EventGrid } from './EventGrid';

const gridIcon = <GridIcon />;

export const EventLogSection = memo(function EventLogSection() {
  return (
    <section className={sectionClass} aria-label={ARIA_EVENT_LOG}>
      <SectionHeader icon={gridIcon} title={SECTION_EVENT_LOG} />
      <div className={gridContentClass}>
        <EventGrid />
      </div>
    </section>
  );
});
