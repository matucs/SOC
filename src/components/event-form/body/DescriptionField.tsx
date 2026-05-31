import { memo } from 'react';
import type { DescriptionFieldProps } from '../types/EventForm.types';
import { DEFAULT_FORM_VALUES } from '../constants/EventForm.constants';
import { FieldLabel } from '../../ui/FieldLabel';
import { FIELD_IDS } from '../constants/EventFormBody.constants';
import { LABEL_DESCRIPTION, PLACEHOLDER_DESCRIPTION } from '../strings/EventFormBody.strings';
import { inputClass, textareaStyle } from '../styles/EventFormBody.styles';

export const DescriptionField = memo(function DescriptionField({ onDirty }: DescriptionFieldProps) {
  return (
    <div>
      <FieldLabel htmlFor={FIELD_IDS.description}>{LABEL_DESCRIPTION}</FieldLabel>
      <textarea
        id={FIELD_IDS.description}
        name="description"
        placeholder={PLACEHOLDER_DESCRIPTION}
        defaultValue={DEFAULT_FORM_VALUES.description}
        onInput={onDirty}
        rows={2}
        className={inputClass}
        style={textareaStyle}
      />
    </div>
  );
});
