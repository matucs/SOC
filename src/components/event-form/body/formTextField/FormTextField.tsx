import { memo, type RefObject } from 'react';
import { FieldLabel } from '../../../ui/FieldLabel';
import { FieldError, fieldErrorId } from '../../../ui/FieldError';
import { inputClass, getInputStyle } from '../../styles/EventFormBody.styles';

export interface FormTextFieldProps {
  id: string;
  name: string;
  label: string;
  defaultValue: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
  onDirty?: () => void;
}

export const FormTextField = memo(function FormTextField({
  id,
  name,
  label,
  defaultValue,
  placeholder,
  required = false,
  error,
  inputRef,
  onDirty,
}: FormTextFieldProps) {
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onInput={onDirty}
        className={inputClass}
        style={getInputStyle(!!error)}
        aria-invalid={!!error}
        aria-describedby={error ? fieldErrorId(id) : undefined}
        autoComplete="off"
      />
      <FieldError id={fieldErrorId(id)} error={error} />
    </div>
  );
});
