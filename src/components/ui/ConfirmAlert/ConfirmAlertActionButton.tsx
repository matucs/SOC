import { memo } from 'react';
import { Button } from '../Button';
import { useStableCallback } from '../../../hooks/useStableHandler';
import type { ConfirmAlertActionButtonProps } from './ConfirmAlertPanel.types';
import { CONFIRM_ALERT_BUTTON_TYPE } from './ConfirmAlertPanelActions.constants';

export const ConfirmAlertActionButton = memo(function ConfirmAlertActionButton({
  label,
  variant,
  onClick,
  buttonRef,
}: ConfirmAlertActionButtonProps) {
  const handleClick = useStableCallback(onClick);

  return (
    <Button
      ref={buttonRef}
      type={CONFIRM_ALERT_BUTTON_TYPE}
      variant={variant}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
});
