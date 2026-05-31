import { memo } from 'react';
import type { TimestampFieldProps } from '../types/EventForm.types';
import { DateTimeInput } from '../../ui/DateTimeInput';
import { FieldLabel } from '../../ui/FieldLabel';
import { FieldError, fieldErrorId } from '../../ui/FieldError';
import { FIELD_IDS } from '../constants/EventFormBody.constants';
import { LABEL_TIMESTAMP } from '../strings/EventFormBody.strings';
import { getGridMutedFieldStyle } from '../styles/EventFormBody.styles';

export const TimestampField = memo(function TimestampField({
  error,
  defaultTimestamp,
  inputRef,
  onDirty,
}: TimestampFieldProps) {
  return (
    <div>
      <FieldLabel htmlFor={FIELD_IDS.timestamp} required>
        {LABEL_TIMESTAMP}
      </FieldLabel>
      <DateTimeInput
        id={FIELD_IDS.timestamp}
        name="timestamp"
        defaultValue={defaultTimestamp}
        inputRef={inputRef}
        onDirty={onDirty}
        style={getGridMutedFieldStyle(!!error)}
        aria-invalid={!!error}
        aria-describedby={error ? fieldErrorId(FIELD_IDS.timestamp) : undefined}
      />
      <FieldError id={fieldErrorId(FIELD_IDS.timestamp)} error={error} />
    </div>
  );
});
