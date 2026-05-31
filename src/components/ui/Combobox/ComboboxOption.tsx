import { memo, type MouseEvent } from 'react';
import type { ComboboxOptionProps } from './Combobox.types';
import {
  COMBOBOX_OPTION_ATTR,
  COMBOBOX_OPTION_ROLE,
  COMBOBOX_VALUE_ATTR,
} from './Combobox.constants';
import { optionClass } from './Combobox.styles';

export const ComboboxOption = memo(function ComboboxOption({
  value,
  onSelect,
}: ComboboxOptionProps) {
  const handleMouseDown = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    onSelect(value);
  };

  return (
    <li
      role={COMBOBOX_OPTION_ROLE}
      {...{ [COMBOBOX_OPTION_ATTR]: true }}
      {...{ [COMBOBOX_VALUE_ATTR]: value }}
      className={optionClass}
      onMouseDown={handleMouseDown}
    >
      {value}
    </li>
  );
});
