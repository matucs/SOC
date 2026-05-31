import type { CSSProperties, RefObject } from 'react';

export interface ComboboxProps {
  id: string;
  name: string;
  options: readonly string[];
  defaultValue?: string;
  placeholder?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
  className?: string;
  style?: CSSProperties;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
  onDirty?: () => void;
}

export interface UseComboboxOptions {
  inputRef?: RefObject<HTMLInputElement | null>;
  onDirty?: () => void;
}

export interface UseComboboxResult {
  listId: string;
  listRef: RefObject<HTMLUListElement | null>;
  setInputRef: (element: HTMLInputElement | null) => void;
  handleInput: (value: string) => void;
  handleFocus: (value: string) => void;
  handleSelect: (value: string) => void;
}

export interface ComboboxInputProps {
  id: string;
  name: string;
  listId: string;
  defaultValue: string;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  ariaInvalid?: boolean;
  ariaDescribedBy?: string;
  inputRef: (element: HTMLInputElement | null) => void;
  onInput: (value: string) => void;
  onFocus: (value: string) => void;
}

export interface ComboboxListProps {
  listId: string;
  listRef: RefObject<HTMLUListElement | null>;
  options: readonly string[];
  onSelect: (value: string) => void;
}

export interface ComboboxOptionProps {
  value: string;
  onSelect: (value: string) => void;
}
