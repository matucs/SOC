import { memo } from 'react';
import { CloseIcon } from '../icons';
import { useStableCallback } from '../../../hooks/useStableHandler';
import type { ModalCloseButtonProps } from './Modal.types';
import {
  MODAL_CLOSE_BUTTON_TYPE,
  modalCloseButtonA11yProps,
} from './ModalCloseButton.constants';
import { closeButtonClass } from './ModalCloseButton.styles';

export const ModalCloseButton = memo(function ModalCloseButton({
  onClose,
}: ModalCloseButtonProps) {
  const handleClick = useStableCallback(onClose);

  return (
    <button
      type={MODAL_CLOSE_BUTTON_TYPE}
      {...modalCloseButtonA11yProps()}
      className={closeButtonClass}
      onClick={handleClick}
    >
      <CloseIcon />
    </button>
  );
});
