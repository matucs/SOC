import { memo } from 'react';
import { useEventStore } from '../../store/useEventStore';
import { LiveClock } from '../liveClock';
import { EventCounter } from '../eventCounter';
import { AppHeaderLiveStatus } from './AppHeaderLiveStatus';
import { headerMobileMetaClass, headerMobileMetaStyle } from './AppHeader.styles';

export const AppHeaderMobileMeta = memo(function AppHeaderMobileMeta() {
  const eventCount = useEventStore((s) => s.gridEvents.length);

  return (
    <div className={headerMobileMetaClass} style={headerMobileMetaStyle}>
      <AppHeaderLiveStatus />
      <LiveClock />
      <EventCounter count={eventCount} />
    </div>
  );
});
