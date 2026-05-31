import type { ColumnTogglePanelProps } from '../../types/DataGrid.types';
import { ColumnToggleItem } from './columnToggleItem';
import { isColumnVisible } from '../../utils/columnToggleDropdown.utils';
import { DROPDOWN_LISTBOX_ROLE } from '../../constants/ColumnToggleDropdown.constants';
import { ARIA_COLUMN_VISIBILITY } from '../../strings/ColumnToggleDropdown.strings';
import { dropdownPanelClass, dropdownPanelStyle } from '../../styles/ColumnToggleDropdown.styles';

export function ColumnTogglePanel<T>({
  columns,
  columnVisibility,
  onToggle,
}: ColumnTogglePanelProps<T>) {
  return (
    <div
      className={dropdownPanelClass}
      style={dropdownPanelStyle}
      role={DROPDOWN_LISTBOX_ROLE}
      aria-label={ARIA_COLUMN_VISIBILITY}
    >
      {columns.map((col) => (
        <ColumnToggleItem
          key={String(col.accessor)}
          label={col.label}
          accessor={col.accessor}
          isVisible={isColumnVisible(columnVisibility, col.accessor)}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
