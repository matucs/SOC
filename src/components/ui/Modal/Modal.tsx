import { memo } from 'react';
import { createPortal } from 'react-dom';
import type { ModalProps } from './Modal.types';
import { DEFAULT_TITLE_ID } from './Modal.constants';
import { useModal } from './useModal';
import { ModalOverlay } from './ModalOverlay';
import { ModalDialog } from './ModalDialog';

export const Modal = memo(function Modal({
  isOpen,
  onClose,
  title,
  titleId = DEFAULT_TITLE_ID,
  children,
  dismissBlockedRef,
}: ModalProps) {
  const {
    overlayRef,
    dialogRef,
    handleBackdropClick,
    handleDialogClick,
    handleCloseClick,
  } = useModal({ isOpen, onClose, dismissBlockedRef });

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay overlayRef={overlayRef} onBackdropClick={handleBackdropClick}>
      <ModalDialog
        dialogRef={dialogRef}
        titleId={titleId}
        title={title}
        onClose={handleCloseClick}
        onDialogClick={handleDialogClick}
      >
        {children}
      </ModalDialog>
    </ModalOverlay>,
    document.body,
  );
});

export type { ModalProps } from './Modal.types';
