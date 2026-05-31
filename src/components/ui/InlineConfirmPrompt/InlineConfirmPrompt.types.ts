import type { RefObject } from 'react';
import type { ImperativeOverlayHandle } from '../../../hooks/useImperativeOverlay';

export type InlineConfirmPromptHandle = ImperativeOverlayHandle;

export interface InlineConfirmPromptProps {
  titleId: string;
  title: string;
  message: string;
  cancelLabel: string;
  confirmLabel: string;
  inertTargetRef: RefObject<HTMLElement | null>;
  dismissBlockedRef: RefObject<boolean>;
  onCancel: () => void;
  onConfirm: () => void;
}
