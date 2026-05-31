import { memo, useCallback, useState, type ChangeEvent, type CSSProperties, type JSX } from 'react';
import {
  inputClass,
  getInputStyle,
  optionStyle,
} from '../styles/EventFormBody.styles';
import type { FieldAccent } from '../constants/formFieldTheme.constants';

export interface FormSelectOption<T extends string> {
  value: T;
  label: string;
}

interface FormSelectProps<T extends string> {
  id: string;
  name: string;
  defaultValue: T;
  options: readonly FormSelectOption<T>[];
  getAccent: (value: T) => FieldAccent;
  onDirty?: () => void;
}

function accentStyle(accent: FieldAccent, hasError = false): CSSProperties {
  const base = getInputStyle(hasError);
  if (hasError) return base;
  return { ...base, color: accent.color, borderColor: accent.borderColor };
}

export const FormSelect = memo(function FormSelect<T extends string>({
  id,
  name,
  defaultValue,
  options,
  getAccent,
  onDirty,
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
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
      className={`${inputClass} form-select`}
      style={accentStyle(accent)}
    >
      {options.map((option) => {
        const optionAccent = getAccent(option.value);
        return (
          <option
            key={option.value}
            value={option.value}
            style={{ ...optionStyle, color: optionAccent.color }}
          >
            {option.label}
          </option>
        );
      })}
    </select>
  );
}) as <T extends string>(props: FormSelectProps<T>) => JSX.Element;
