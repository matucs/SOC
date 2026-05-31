import { useCallback, useId, useRef } from 'react';
import { useStableHandler } from '../../../hooks/useStableHandler';
import type { UseComboboxOptions, UseComboboxResult } from './Combobox.types';
import { assignInputRef, filterComboboxOptions } from './combobox.utils';

export function useCombobox({ inputRef, onDirty }: UseComboboxOptions): UseComboboxResult {
  const listId = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const localInputRef = useRef<HTMLInputElement | null>(null);
  const onDirtyRef = useStableHandler(onDirty ?? (() => {}));

  const setInputRef = useCallback(
    (element: HTMLInputElement | null) => {
      localInputRef.current = element;
      assignInputRef(inputRef, element);
    },
    [inputRef],
  );

  const handleInput = useCallback((value: string) => {
    onDirtyRef.current?.();
    filterComboboxOptions(listRef.current, value);
  }, [onDirtyRef]);

  const handleFocus = useCallback((value: string) => {
    filterComboboxOptions(listRef.current, value);
  }, []);

  const handleSelect = useCallback((value: string) => {
    const input = localInputRef.current;
    if (!input) return;

    input.value = value;
    onDirtyRef.current?.();
    filterComboboxOptions(listRef.current, value);
    input.focus();
  }, [onDirtyRef]);

  return {
    listId,
    listRef,
    setInputRef,
    handleInput,
    handleFocus,
    handleSelect,
  };
}
