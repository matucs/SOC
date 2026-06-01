import { memo } from 'react';
import type { TitleFieldProps } from '../types/EventForm.types';
import { TITLE_TEXT_FIELD } from '../constants/eventFormTextFields.constants';
import { FormTextField } from './formTextField';

export const TitleField = memo(function TitleField({
  defaultValue,
  error,
  inputRef,
  onDirty,
}: TitleFieldProps) {
  return (
    <FormTextField
      {...TITLE_TEXT_FIELD}
      required
      defaultValue={defaultValue}
      error={error}
      inputRef={inputRef}
      onDirty={onDirty}
    />
  );
});
