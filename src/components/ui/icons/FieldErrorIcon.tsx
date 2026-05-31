import { memo } from 'react';
import { AlertCircleIcon } from './AlertCircleIcon';
import { FIELD_ERROR_ICON_SIZE } from './FieldErrorIcon.constants';

export const FieldErrorIcon = memo(function FieldErrorIcon() {
  return <AlertCircleIcon size={FIELD_ERROR_ICON_SIZE} aria-hidden />;
});
