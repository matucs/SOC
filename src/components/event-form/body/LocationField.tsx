import { memo } from 'react';
import type { LocationFieldProps } from '../types/EventForm.types';
import { LOCATION_SELECT_FIELD } from '../constants/eventFormSelectFields.constants';
import { FormSelectField } from './formSelectField';

export const LocationField = memo(function LocationField({
  defaultValue,
  error,
  inputRef,
  onDirty,
}: LocationFieldProps) {
  return (
    <FormSelectField
      {...LOCATION_SELECT_FIELD}
      defaultValue={defaultValue}
      error={error}
      inputRef={inputRef}
      onDirty={onDirty}
      required
    />
  );
});
