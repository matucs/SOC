import type { ColumnToggleButtonProps } from '../../types/DataGrid.types';
import { Button } from '../../../ui/Button';
import { ColumnsIcon } from '../../../ui/icons';
import {
  COLUMNS_BUTTON_VARIANT,
  COLUMNS_BUTTON_SIZE,
  DROPDOWN_HASPOPUP,
} from '../../constants/ColumnToggleDropdown.constants';
import { BTN_COLUMNS, ARIA_TOGGLE_COLUMNS } from '../../strings/ColumnToggleDropdown.strings';

export const ColumnToggleButton = ({ isOpen, onToggle }: ColumnToggleButtonProps) => (
  <Button
    variant={COLUMNS_BUTTON_VARIANT}
    size={COLUMNS_BUTTON_SIZE}
    onClick={onToggle}
    aria-label={ARIA_TOGGLE_COLUMNS}
    aria-expanded={isOpen}
    aria-haspopup={DROPDOWN_HASPOPUP}
  >
    <ColumnsIcon />
    {BTN_COLUMNS}
  </Button>
);
