import { memo } from 'react';
import type { ModalDialogProps } from './Modal.types';
import { modalDialogA11yProps } from './Modal.constants';
import { ModalHeader } from './ModalHeader';
import { bodyClass, dialogClass, dialogStyle } from './Modal.styles';

export const ModalDialog = memo(function ModalDialog({
  dialogRef,
  titleId,
  title,
  onClose,
  onDialogClick,
  children,
}: ModalDialogProps) {
  return (
    <div
      ref={dialogRef}
      {...modalDialogA11yProps(titleId)}
      className={dialogClass}
      style={dialogStyle}
      onClick={onDialogClick}
    >
      <ModalHeader title={title} titleId={titleId} onClose={onClose} />
      <div className={bodyClass}>{children}</div>
    </div>
  );
});
