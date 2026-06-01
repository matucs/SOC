import { memo, useCallback, useState, type ChangeEvent, type JSX } from 'react';
import { inputClass } from '../../styles/EventFormBody.styles';
import type { FormSelectProps } from '../../types/FormSelect.types';
import { getFormSelectAccentStyle, getFormSelectOptionStyle } from '../../utils/formSelect.utils';

export const FormSelect = memo(function FormSelect<T extends string>({
  id,
  name,
  defaultValue,
  options,
  getAccent,
  onDirty,
  inputRef,
  hasError = false,
  placeholder,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
}: FormSelectProps<T>) {
  const [accent, setAccent] = useState(() => getAccent(defaultValue));

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onDirty?.();
      setAccent(getAccent(e.target.value as T));
    },
    [getAccent, onDirty],
  );

  return (
    <select
      ref={inputRef}
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
      className={`${inputClass} form-select`}
      style={getFormSelectAccentStyle(accent, hasError)}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedBy}
    >
      {placeholder ? (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      ) : null}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={getFormSelectOptionStyle(getAccent(option.value))}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}) as <T extends string>(props: FormSelectProps<T>) => JSX.Element;
