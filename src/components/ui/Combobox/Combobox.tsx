import { memo } from 'react';
import type { ComboboxProps } from './Combobox.types';
import { useCombobox } from './useCombobox';
import { ComboboxInput } from './ComboboxInput';
import { ComboboxList } from './ComboboxList';
import { wrapperClass } from './Combobox.styles';

export const Combobox = memo(function Combobox({
  id,
  name,
  options,
  defaultValue = '',
  placeholder,
  inputRef,
  className,
  style,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
  onDirty,
}: ComboboxProps) {
  const { listId, listRef, setInputRef, handleInput, handleFocus, handleSelect } = useCombobox({
    inputRef,
    onDirty,
  });

  return (
    <div className={wrapperClass}>
      <ComboboxInput
        id={id}
        name={name}
        listId={listId}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={className}
        style={style}
        ariaInvalid={ariaInvalid}
        ariaDescribedBy={ariaDescribedBy}
        inputRef={setInputRef}
        onInput={handleInput}
        onFocus={handleFocus}
      />
      <ComboboxList
        listId={listId}
        listRef={listRef}
        options={options}
        onSelect={handleSelect}
      />
    </div>
  );
});
