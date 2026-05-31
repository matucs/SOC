import { memo, type FocusEvent, type InputEvent } from 'react';
import type { ComboboxInputProps } from './Combobox.types';
import {
  COMBOBOX_AUTOCOMPLETE,
  COMBOBOX_INPUT_TYPE,
  comboboxInputA11yProps,
} from './Combobox.constants';

export const ComboboxInput = memo(function ComboboxInput({
  id,
  name,
  listId,
  defaultValue,
  placeholder,
  className,
  style,
  ariaInvalid,
  ariaDescribedBy,
  inputRef,
  onInput,
  onFocus,
}: ComboboxInputProps) {
  const handleInput = (e: InputEvent<HTMLInputElement>) => {
    onInput(e.currentTarget.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocus(e.currentTarget.value);
  };

  return (
    <input
      ref={inputRef}
      id={id}
      name={name}
      type={COMBOBOX_INPUT_TYPE}
      {...comboboxInputA11yProps(listId, ariaInvalid, ariaDescribedBy)}
      placeholder={placeholder}
      defaultValue={defaultValue}
      autoComplete={COMBOBOX_AUTOCOMPLETE}
      onInput={handleInput}
      onFocus={handleFocus}
      className={className}
      style={style}
    />
  );
});
