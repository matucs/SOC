import { StatusDot } from '../../components/ui/StatusDot';
import { LIVE_STATUS_DOT_COLOR, LIVE_STATUS_DOT_SIZE } from './AppHeader.constants';
import { LIVE_LABEL } from './AppHeader.strings';
import { liveStatusClass, liveLabelClass } from './AppHeader.styles';

export const AppHeaderLiveStatus = () => (
  <div className={liveStatusClass}>
    <StatusDot color={LIVE_STATUS_DOT_COLOR} pulse size={LIVE_STATUS_DOT_SIZE} />
    <span className={liveLabelClass}>{LIVE_LABEL}</span>
  </div>
);
