import { memo } from 'react';
import type { EventFormBodyProps } from '../types/EventForm.types';
import { TitleField } from './TitleField';
import { TypeAndSeverityField } from './TypeAndSeverityField';
import { StatusField } from './StatusField';
import { LocationField } from './LocationField';
import { TimestampField } from './TimestampField';
import { DescriptionField } from './DescriptionField';
import { FormActions } from './FormActions';
import { formStackClass } from '../styles/EventFormBody.styles';

export const EventFormBody = memo(function EventFormBody({
  errors,
  defaultTimestamp,
  titleRef,
  timestampRef,
  locationRef,
  onDirty,
  onSubmit,
  onClose,
}: EventFormBodyProps) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className={formStackClass}>
        <TitleField error={errors.title} inputRef={titleRef} onDirty={onDirty} />
        <TypeAndSeverityField onDirty={onDirty} />
        <StatusField onDirty={onDirty} />
        <LocationField
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
        <DescriptionField onDirty={onDirty} />
      </div>
      <FormActions onClose={onClose} />
    </form>
  );
});
