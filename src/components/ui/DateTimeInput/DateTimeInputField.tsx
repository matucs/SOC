import { memo } from 'react';
import type { DateTimeInputFieldProps } from './DateTimeInput.types';
import { fieldClass } from './DateTimeInput.styles';

export const DateTimeInputField = memo(function DateTimeInputField({
  id,
  type,
  defaultValue,
  max,
  inputRef,
  onInput,
  ariaInvalid,
  ariaDescribedBy,
  ariaLabel,
  style,
}: DateTimeInputFieldProps) {
  return (
    <input
      ref={inputRef}
      id={id}
      type={type}
      defaultValue={defaultValue}
      max={max}
      onInput={onInput}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      className={fieldClass}
      style={style}
    />
  );
});
