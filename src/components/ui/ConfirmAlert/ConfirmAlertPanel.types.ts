import type { CSSProperties, MouseEvent, RefObject } from 'react';
import type { ButtonProps } from '../Button/Button.types';

export interface ConfirmAlertPanelContentProps {
  titleId: string;
  title: string;
  message: string;
}

export interface ConfirmAlertActionButtonProps {
  label: string;
  variant: NonNullable<ButtonProps['variant']>;
  onClick: () => void;
  buttonRef?: RefObject<HTMLButtonElement | null>;
}

export interface ConfirmAlertPanelActionsProps {
  cancelLabel: string;
  confirmLabel: string;
  cancelButtonRef?: RefObject<HTMLButtonElement | null>;
  onCancel: () => void;
  onConfirm: () => void;
}

export interface ConfirmAlertPanelProps
  extends ConfirmAlertPanelContentProps,
    ConfirmAlertPanelActionsProps {
  className?: string;
  style?: CSSProperties;
  onPanelClick?: (e: MouseEvent) => void;
}
