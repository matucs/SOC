import { memo } from 'react';
import type { TitleFieldProps } from '../types/EventForm.types';
import { DEFAULT_FORM_VALUES } from '../constants/EventForm.constants';
import { FieldLabel } from '../../ui/FieldLabel';
import { FieldError, fieldErrorId } from '../../ui/FieldError';
import { FIELD_IDS } from '../constants/EventFormBody.constants';
import { LABEL_TITLE, PLACEHOLDER_TITLE } from '../strings/EventFormBody.strings';
import { inputClass, getInputStyle } from '../styles/EventFormBody.styles';

export const TitleField = memo(function TitleField({
  error,
  inputRef,
  onDirty,
}: TitleFieldProps) {
  return (
    <div>
      <FieldLabel htmlFor={FIELD_IDS.title} required>
        {LABEL_TITLE}
      </FieldLabel>
      <input
        ref={inputRef}
        id={FIELD_IDS.title}
        name="title"
        type="text"
        placeholder={PLACEHOLDER_TITLE}
        defaultValue={DEFAULT_FORM_VALUES.title}
        onInput={onDirty}
        className={inputClass}
        style={getInputStyle(!!error)}
        aria-invalid={!!error}
        aria-describedby={error ? fieldErrorId(FIELD_IDS.title) : undefined}
        autoComplete="off"
      />
      <FieldError id={fieldErrorId(FIELD_IDS.title)} error={error} />
    </div>
  );
});
