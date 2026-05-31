import { memo } from 'react';
import type { ModalOverlayProps } from './Modal.types';
import { overlayClass, overlayStyle } from './Modal.styles';

export const ModalOverlay = memo(function ModalOverlay({
  overlayRef,
  onBackdropClick,
  children,
}: ModalOverlayProps) {
  return (
    <div
      ref={overlayRef}
      className={overlayClass}
      style={overlayStyle}
      onClick={onBackdropClick}
    >
      {children}
    </div>
  );
});
