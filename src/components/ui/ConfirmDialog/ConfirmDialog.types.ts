import type React from 'react';
import type { RefObject } from 'react';

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
  titleId?: string;
  /** When false, no extra dim layer — use over an existing modal overlay */
  scrim?: boolean;
}

export interface UseConfirmDialogOptions {
  isOpen: ConfirmDialogProps['isOpen'];
  onCancel: ConfirmDialogProps['onCancel'];
}

export interface UseConfirmDialogResult {
  overlayRef: RefObject<HTMLDivElement | null>;
  cancelRef: RefObject<HTMLButtonElement | null>;
  handleBackdropClick: (e: React.MouseEvent) => void;
  handlePanelClick: (e: React.MouseEvent) => void;
}

export interface ConfirmDialogOverlayProps {
  overlayRef: RefObject<HTMLDivElement | null>;
  scrim: boolean;
  onBackdropClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}
