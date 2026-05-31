import { memo } from 'react';
import { EventLogSection } from './EventLogSection';
import { TimelineSection } from './TimelineSection';
import { mainClass } from '../App.styles';

export const AppMain = memo(function AppMain() {
  return (
    <main className={mainClass}>
      <EventLogSection />
      <TimelineSection />
    </main>
  );
});
