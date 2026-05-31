import type { ColumnToggleItemProps } from '../../../types/DataGrid.types';
import { DROPDOWN_OPTION_ROLE } from '../../../constants/ColumnToggleDropdown.constants';
import {
  dropdownItemClass,
  getCheckboxClass,
  getColumnLabelClass,
} from '../../../styles/ColumnToggleDropdown.styles';
import { CheckIcon } from '../../../../ui/icons';

export function ColumnToggleItem<T>({
  label,
  accessor,
  isVisible,
  onToggle,
}: ColumnToggleItemProps<T>) {
  return (
    <button
      role={DROPDOWN_OPTION_ROLE}
      aria-selected={isVisible}
      onClick={() => onToggle(accessor)}
      className={dropdownItemClass}
    >
      <span className={getCheckboxClass(isVisible)}>
        {isVisible && <CheckIcon />}
      </span>
      <span className={getColumnLabelClass(isVisible)}>{label}</span>
    </button>
  );
}
