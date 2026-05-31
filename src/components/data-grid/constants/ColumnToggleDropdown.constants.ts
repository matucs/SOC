import { tokens } from '../../../theme/tokens';
import { BUTTON_VARIANT_GHOST, BUTTON_SIZE_SM } from '../../ui/Button/Button.constants';

export { BUTTON_VARIANT_GHOST as COLUMNS_BUTTON_VARIANT };
export { BUTTON_SIZE_SM as COLUMNS_BUTTON_SIZE };

export const DROPDOWN_HASPOPUP = 'listbox' as const;
export const DROPDOWN_LISTBOX_ROLE = 'listbox';
export const DROPDOWN_OPTION_ROLE = 'option';

export const dropdownPanelStyle = {
  background: tokens.bgElevated,
  borderColor: tokens.border,
};
