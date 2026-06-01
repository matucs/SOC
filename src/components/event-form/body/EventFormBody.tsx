import { memo } from 'react';
import type { EventFormBodyProps } from '../types/EventForm.types';
import { TitleField } from './TitleField';
import { TypeAndSeverityField } from './TypeAndSeverityField';
import { StatusField } from './StatusField';
import { LocationField } from './LocationField';
import { TimestampField } from './TimestampField';
import { DescriptionField } from './DescriptionField';
import { FormActions } from './FormActions';
import {
  formLayoutClass,
  formScrollClass,
  formStackClass,
} from '../styles/EventFormBody.styles';

export const EventFormBody = memo(function EventFormBody({
  initialValues,
  errors,
  defaultTimestamp,
  titleRef,
  timestampRef,
  locationRef,
  onDirty,
  onSubmit,
  onClose,
  submitLabel,
}: EventFormBodyProps) {
  return (
    <form onSubmit={onSubmit} noValidate className={formLayoutClass}>
      <div className={formScrollClass}>
        <div className={formStackClass}>
          <TitleField
            defaultValue={initialValues.title}
            error={errors.title}
            inputRef={titleRef}
            onDirty={onDirty}
          />
          <TypeAndSeverityField
            defaultType={initialValues.type}
            defaultSeverity={initialValues.severity}
            onDirty={onDirty}
          />
          <StatusField defaultStatus={initialValues.status} onDirty={onDirty} />
          <LocationField
            defaultValue={initialValues.location}
            error={errors.location}
            inputRef={locationRef}
            onDirty={onDirty}
          />
          <TimestampField
            error={errors.timestamp}
            defaultTimestamp={defaultTimestamp}
            inputRef={timestampRef}
            onDirty={onDirty}
          />
          <DescriptionField
            defaultValue={initialValues.description}
            onDirty={onDirty}
          />
        </div>
      </div>
      <FormActions onClose={onClose} submitLabel={submitLabel} />
    </form>
  );
});
