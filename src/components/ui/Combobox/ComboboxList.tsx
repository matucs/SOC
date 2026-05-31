import { memo } from 'react';
import type { ComboboxListProps } from './Combobox.types';
import { ComboboxOption } from './ComboboxOption';
import {
  COMBOBOX_EMPTY_ATTR,
  COMBOBOX_EMPTY_ROLE,
  COMBOBOX_LIST_ATTR,
  COMBOBOX_LIST_ROLE,
} from './Combobox.constants';
import { COMBOBOX_EMPTY_MESSAGE } from './Combobox.strings';
import { listClass, emptyClass, listStyle } from './Combobox.styles';

export const ComboboxList = memo(function ComboboxList({
  listId,
  listRef,
  options,
  onSelect,
}: ComboboxListProps) {
  return (
    <ul
      ref={listRef}
      id={listId}
      role={COMBOBOX_LIST_ROLE}
      {...{ [COMBOBOX_LIST_ATTR]: true }}
      className={listClass}
      style={listStyle}
    >
      {options.map((option) => (
        <ComboboxOption key={option} value={option} onSelect={onSelect} />
      ))}
      <li
        role={COMBOBOX_EMPTY_ROLE}
        {...{ [COMBOBOX_EMPTY_ATTR]: true }}
        hidden
        className={emptyClass}
      >
        {COMBOBOX_EMPTY_MESSAGE}
      </li>
    </ul>
  );
});
