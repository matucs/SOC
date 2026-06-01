import { memo } from 'react';
import type { StatusFieldProps } from '../types/EventForm.types';
import { STATUS_SELECT_FIELD } from '../constants/eventFormSelectFields.constants';
import { FormSelectField } from './formSelectField';

export const StatusField = memo(function StatusField({
  defaultStatus,
  onDirty,
}: StatusFieldProps) {
  return (
    <FormSelectField
      {...STATUS_SELECT_FIELD}
      defaultValue={defaultStatus}
      onDirty={onDirty}
    />
  );
});
