import { memo, type JSX, type RefObject } from 'react';
import { FieldLabel } from '../../../ui/FieldLabel';
import { FieldError, fieldErrorId } from '../../../ui/FieldError';
import { FormSelect, type FormSelectOption } from '../formSelect';
import type { EventValueAccent } from '../../../../theme/eventValueTheme';

export interface FormSelectFieldProps<T extends string> {
  id: string;
  name: string;
  label: string;
  defaultValue: T;
  options: readonly FormSelectOption<T>[];
  getAccent: (value: T) => EventValueAccent;
  onDirty?: () => void;
  required?: boolean;
  error?: string;
  inputRef?: RefObject<HTMLSelectElement | null>;
  placeholder?: string;
}

export const FormSelectField = memo(function FormSelectField<T extends string>({
  id,
  name,
  label,
  defaultValue,
  options,
  getAccent,
  onDirty,
  required = false,
  error,
  inputRef,
  placeholder,
}: FormSelectFieldProps<T>) {
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <FormSelect
        id={id}
        name={name}
        defaultValue={defaultValue}
        options={options}
        getAccent={getAccent}
        onDirty={onDirty}
        inputRef={inputRef}
        hasError={!!error}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? fieldErrorId(id) : undefined}
      />
      <FieldError id={fieldErrorId(id)} error={error} />
    </div>
  );
}) as <T extends string>(props: FormSelectFieldProps<T>) => JSX.Element;
