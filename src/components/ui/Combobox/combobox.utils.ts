import type { RefObject } from 'react';
import {
  COMBOBOX_EMPTY_SELECTOR,
  COMBOBOX_OPTION_SELECTOR,
  COMBOBOX_VALUE_ATTR,
} from './Combobox.constants';

export function assignInputRef(
  ref: RefObject<HTMLInputElement | null> | undefined,
  element: HTMLInputElement | null,
): void {
  if (ref) ref.current = element;
}

export function filterComboboxOptions(list: HTMLUListElement | null, query: string): void {
  if (!list) return;

  const normalized = query.trim().toLowerCase();
  let visibleCount = 0;

  list.querySelectorAll<HTMLElement>(COMBOBOX_OPTION_SELECTOR).forEach((option) => {
    const value = option.getAttribute(COMBOBOX_VALUE_ATTR) ?? '';
    const matches = !normalized || value.toLowerCase().includes(normalized);
    option.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  const empty = list.querySelector<HTMLElement>(COMBOBOX_EMPTY_SELECTOR);
  if (empty) empty.hidden = visibleCount > 0;
}
