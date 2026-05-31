import { memo } from 'react';
import type { TypeAndSeverityFieldProps } from '../types/EventForm.types';
import { DEFAULT_FORM_VALUES, EVENT_TYPES, SEVERITIES } from '../constants/EventForm.constants';
import {
  TYPE_FIELD_ACCENTS,
  SEVERITY_FIELD_ACCENTS,
} from '../constants/formFieldTheme.constants';
import { FieldLabel } from '../../ui/FieldLabel';
import { FIELD_IDS } from '../constants/EventFormBody.constants';
import { LABEL_TYPE, LABEL_SEVERITY } from '../strings/EventFormBody.strings';
import { twoColumnGridClass } from '../styles/EventFormBody.styles';
import { FormSelect } from './FormSelect';

export const TypeAndSeverityField = memo(function TypeAndSeverityField({
  onDirty,
}: TypeAndSeverityFieldProps) {
  return (
    <div className={twoColumnGridClass}>
      <div>
        <FieldLabel htmlFor={FIELD_IDS.type}>{LABEL_TYPE}</FieldLabel>
        <FormSelect
          id={FIELD_IDS.type}
          name="type"
          defaultValue={DEFAULT_FORM_VALUES.type}
          options={EVENT_TYPES}
          getAccent={(value) => TYPE_FIELD_ACCENTS[value]}
          onDirty={onDirty}
        />
      </div>
      <div>
        <FieldLabel htmlFor={FIELD_IDS.severity}>{LABEL_SEVERITY}</FieldLabel>
        <FormSelect
          id={FIELD_IDS.severity}
          name="severity"
          defaultValue={DEFAULT_FORM_VALUES.severity}
          options={SEVERITIES}
          getAccent={(value) => SEVERITY_FIELD_ACCENTS[value]}
          onDirty={onDirty}
        />
      </div>
    </div>
  );
});
