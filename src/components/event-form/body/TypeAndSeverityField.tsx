import { memo } from 'react';
import type { TypeAndSeverityFieldProps } from '../types/EventForm.types';
import {
  SEVERITY_SELECT_FIELD,
  TYPE_SELECT_FIELD,
} from '../constants/eventFormSelectFields.constants';
import { twoColumnGridClass } from '../styles/EventFormBody.styles';
import { FormSelectField } from './formSelectField';

export const TypeAndSeverityField = memo(function TypeAndSeverityField({
  defaultType,
  defaultSeverity,
  onDirty,
}: TypeAndSeverityFieldProps) {
  return (
    <div className={twoColumnGridClass}>
      <FormSelectField
        {...TYPE_SELECT_FIELD}
        defaultValue={defaultType}
        onDirty={onDirty}
      />
      <FormSelectField
        {...SEVERITY_SELECT_FIELD}
        defaultValue={defaultSeverity}
        onDirty={onDirty}
      />
    </div>
  );
});
