import { memo } from 'react';
import type { ModalHeaderProps } from './Modal.types';
import { ModalCloseButton } from './ModalCloseButton';
import { headerClass, titleClass, headerStyle } from './Modal.styles';

export const ModalHeader = memo(function ModalHeader({
  title,
  titleId,
  onClose,
}: ModalHeaderProps) {
  return (
    <div className={headerClass} style={headerStyle}>
      <h2 id={titleId} className={titleClass}>
        {title}
      </h2>
      <ModalCloseButton onClose={onClose} />
    </div>
  );
});
