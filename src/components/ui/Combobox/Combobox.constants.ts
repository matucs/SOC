export const COMBOBOX_INPUT_TYPE = 'text' as const;

export const COMBOBOX_INPUT_ROLE = 'combobox';

export const COMBOBOX_LIST_ROLE = 'listbox';

export const COMBOBOX_OPTION_ROLE = 'option';

export const COMBOBOX_EMPTY_ROLE = 'presentation';

export const COMBOBOX_ARIA_AUTOCOMPLETE = 'list';

export const COMBOBOX_ARIA_EXPANDED = false;

export const COMBOBOX_AUTOCOMPLETE = 'off';

export const COMBOBOX_OPTION_SELECTOR = '[data-combobox-option]';

export const COMBOBOX_EMPTY_SELECTOR = '[data-combobox-empty]';

export const COMBOBOX_LIST_ATTR = 'data-combobox-list';

export const COMBOBOX_OPTION_ATTR = 'data-combobox-option';

export const COMBOBOX_EMPTY_ATTR = 'data-combobox-empty';

export const COMBOBOX_VALUE_ATTR = 'data-value';

export function comboboxInputA11yProps(
  listId: string,
  ariaInvalid?: boolean,
  ariaDescribedBy?: string,
) {
  return {
    role: COMBOBOX_INPUT_ROLE,
    'aria-autocomplete': COMBOBOX_ARIA_AUTOCOMPLETE,
    'aria-controls': listId,
    'aria-expanded': COMBOBOX_ARIA_EXPANDED,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
  } as const;
}
