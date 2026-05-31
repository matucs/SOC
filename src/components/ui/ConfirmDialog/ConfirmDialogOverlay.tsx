import { memo } from 'react';
import type { ConfirmDialogOverlayProps } from './ConfirmDialog.types';
import { getConfirmDialogOverlayStyle } from './confirmDialog.utils';
import { overlayClass } from './ConfirmDialog.styles';

export const ConfirmDialogOverlay = memo(function ConfirmDialogOverlay({
  overlayRef,
  scrim,
  onBackdropClick,
  children,
}: ConfirmDialogOverlayProps) {
  return (
    <div
      ref={overlayRef}
      className={overlayClass}
      style={getConfirmDialogOverlayStyle(scrim)}
      onClick={onBackdropClick}
    >
      {children}
    </div>
  );
});
