import { memo } from 'react';
import type { StatusFieldProps } from '../types/EventForm.types';
import { DEFAULT_FORM_VALUES, STATUSES } from '../constants/EventForm.constants';
import { STATUS_FIELD_ACCENTS } from '../constants/formFieldTheme.constants';
import { FieldLabel } from '../../ui/FieldLabel';
import { FIELD_IDS } from '../constants/EventFormBody.constants';
import { LABEL_STATUS } from '../strings/EventFormBody.strings';
import { FormSelect } from './FormSelect';

export const StatusField = memo(function StatusField({ onDirty }: StatusFieldProps) {
  return (
    <div>
      <FieldLabel htmlFor={FIELD_IDS.status}>{LABEL_STATUS}</FieldLabel>
      <FormSelect
        id={FIELD_IDS.status}
        name="status"
        defaultValue={DEFAULT_FORM_VALUES.status}
        options={STATUSES}
        getAccent={(value) => STATUS_FIELD_ACCENTS[value]}
        onDirty={onDirty}
      />
    </div>
  );
});
