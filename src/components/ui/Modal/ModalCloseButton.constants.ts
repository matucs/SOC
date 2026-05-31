import { ARIA_CLOSE_LABEL } from './Modal.strings';

export const MODAL_CLOSE_BUTTON_TYPE = 'button' as const;

export function modalCloseButtonA11yProps() {
  return {
    'aria-label': ARIA_CLOSE_LABEL,
  } as const;
}
