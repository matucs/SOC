import { memo } from 'react';
import { useEventStore } from '../../store/useEventStore';
import { LiveClock } from '../liveClock';
import { EventCounter } from '../eventCounter';
import { AppHeaderLiveStatus } from './AppHeaderLiveStatus';
import {
  headerCenterClass,
  headerDividerClass,
  headerDividerStyle,
} from './AppHeader.styles';

export const AppHeaderCenter = memo(function AppHeaderCenter() {
  const eventCount = useEventStore((s) => s.gridEvents.length);

  return (
    <div className={headerCenterClass}>
      <AppHeaderLiveStatus />
      <LiveClock />
      <div className={headerDividerClass} style={headerDividerStyle} />
      <EventCounter count={eventCount} />
    </div>
  );
});
