import { memo } from 'react';
import { createPortal } from 'react-dom';
import { ConfirmAlertPanel } from '../ConfirmAlert';
import type { ConfirmDialogProps } from './ConfirmDialog.types';
import { DEFAULT_TITLE_ID, CONFIRM_DIALOG_PORTAL_TARGET } from './ConfirmDialog.constants';
import { useConfirmDialog } from './useConfirmDialog';
import { ConfirmDialogOverlay } from './ConfirmDialogOverlay';
import { dialogClass, dialogStyle } from './ConfirmDialog.styles';

export const ConfirmDialog = memo(function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  titleId = DEFAULT_TITLE_ID,
  scrim = true,
}: ConfirmDialogProps) {
  const { overlayRef, cancelRef, handleBackdropClick, handlePanelClick } = useConfirmDialog({
    isOpen,
    onCancel,
  });

  if (!isOpen) return null;

  return createPortal(
    <ConfirmDialogOverlay
      overlayRef={overlayRef}
      scrim={scrim}
      onBackdropClick={handleBackdropClick}
    >
      <ConfirmAlertPanel
        titleId={titleId}
        title={title}
        message={message}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        cancelButtonRef={cancelRef}
        onCancel={onCancel}
        onConfirm={onConfirm}
        className={dialogClass}
        style={dialogStyle}
        onPanelClick={handlePanelClick}
      />
    </ConfirmDialogOverlay>,
    CONFIRM_DIALOG_PORTAL_TARGET,
  );
});

export type { ConfirmDialogProps } from './ConfirmDialog.types';
