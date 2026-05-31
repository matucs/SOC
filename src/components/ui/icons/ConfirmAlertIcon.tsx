import { memo } from 'react';
import { AlertCircleIcon } from './AlertCircleIcon';
import { CONFIRM_ALERT_ICON_SIZE } from './ConfirmAlertIcon.constants';
import { confirmAlertIconWrapClass, confirmAlertIconWrapStyle } from './ConfirmAlertIcon.styles';

export const ConfirmAlertIcon = memo(function ConfirmAlertIcon() {
  return (
    <div className={confirmAlertIconWrapClass} style={confirmAlertIconWrapStyle} aria-hidden>
      <AlertCircleIcon size={CONFIRM_ALERT_ICON_SIZE} />
    </div>
  );
});
