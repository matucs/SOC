export const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export const DEFAULT_TITLE_ID = 'modal-title';

export const MODAL_DIALOG_ROLE = 'dialog';

export const MODAL_ARIA_MODAL = 'true';

export const MODAL_FOCUS_DELAY_MS = 50;

export const Key = {
  ESCAPE: 'Escape',
  TAB: 'Tab',
  KEYDOWN: 'keydown',
} as const;

export function modalDialogA11yProps(titleId: string) {
  return {
    role: MODAL_DIALOG_ROLE,
    'aria-modal': MODAL_ARIA_MODAL,
    'aria-labelledby': titleId,
  } as const;
}
