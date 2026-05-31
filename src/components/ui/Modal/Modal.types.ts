import type React from 'react';
import type { RefObject } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleId?: string;
  children: React.ReactNode;
  /** When `.current` is true, escape and backdrop dismiss are ignored */
  dismissBlockedRef?: RefObject<boolean>;
}

export interface UseModalOptions {
  isOpen: boolean;
  onClose: () => void;
  dismissBlockedRef?: RefObject<boolean>;
}

export interface UseModalResult {
  overlayRef: RefObject<HTMLDivElement | null>;
  dialogRef: RefObject<HTMLDivElement | null>;
  handleBackdropClick: (e: React.MouseEvent) => void;
  handleDialogClick: (e: React.MouseEvent) => void;
  handleCloseClick: () => void;
}

export interface ModalHeaderProps {
  title: string;
  titleId: string;
  onClose: () => void;
}

export interface ModalCloseButtonProps {
  onClose: () => void;
}

export interface ModalDialogProps {
  dialogRef: RefObject<HTMLDivElement | null>;
  titleId: string;
  title: string;
  onClose: () => void;
  onDialogClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export interface ModalOverlayProps {
  overlayRef: RefObject<HTMLDivElement | null>;
  onBackdropClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}
