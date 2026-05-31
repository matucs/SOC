import { memo } from 'react';
import type { ConfirmAlertPanelActionsProps } from './ConfirmAlertPanel.types';
import { ConfirmAlertActionButton } from './ConfirmAlertActionButton';
import {
  CONFIRM_ALERT_CANCEL_VARIANT,
  CONFIRM_ALERT_CONFIRM_VARIANT,
} from './ConfirmAlertPanelActions.constants';
import { actionsClass } from './ConfirmAlertPanel.styles';

export const ConfirmAlertPanelActions = memo(function ConfirmAlertPanelActions({
  cancelLabel,
  confirmLabel,
  cancelButtonRef,
  onCancel,
  onConfirm,
}: ConfirmAlertPanelActionsProps) {
  return (
    <div className={actionsClass}>
      <ConfirmAlertActionButton
        label={cancelLabel}
        variant={CONFIRM_ALERT_CANCEL_VARIANT}
        onClick={onCancel}
        buttonRef={cancelButtonRef}
      />
      <ConfirmAlertActionButton
        label={confirmLabel}
        variant={CONFIRM_ALERT_CONFIRM_VARIANT}
        onClick={onConfirm}
      />
    </div>
  );
});
