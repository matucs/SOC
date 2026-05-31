import { memo } from 'react';
import type { LocationFieldProps } from '../types/EventForm.types';
import { DEFAULT_FORM_VALUES } from '../constants/EventForm.constants';
import { LOCATIONS } from '../../../data/locations';
import { Combobox } from '../../ui/Combobox';
import { FieldLabel } from '../../ui/FieldLabel';
import { FieldError, fieldErrorId } from '../../ui/FieldError';
import { FIELD_IDS } from '../constants/EventFormBody.constants';
import { LABEL_LOCATION, PLACEHOLDER_LOCATION } from '../strings/EventFormBody.strings';
import { inputClass, getGridMutedFieldStyle } from '../styles/EventFormBody.styles';

export const LocationField = memo(function LocationField({
  error,
  inputRef,
  onDirty,
}: LocationFieldProps) {
  return (
    <div>
      <FieldLabel htmlFor={FIELD_IDS.location} required>
        {LABEL_LOCATION}
      </FieldLabel>
      <Combobox
        id={FIELD_IDS.location}
        name="location"
        options={LOCATIONS}
        placeholder={PLACEHOLDER_LOCATION}
        defaultValue={DEFAULT_FORM_VALUES.location}
        inputRef={inputRef}
        onDirty={onDirty}
        className={inputClass}
        style={getGridMutedFieldStyle(!!error)}
        aria-invalid={!!error}
        aria-describedby={error ? fieldErrorId(FIELD_IDS.location) : undefined}
      />
      <FieldError id={fieldErrorId(FIELD_IDS.location)} error={error} />
    </div>
  );
});
