import type { ColumnToggleDropdownProps } from '../../types/DataGrid.types';
import { ColumnToggleButton } from './ColumnToggleButton';
import { ColumnTogglePanel } from './ColumnTogglePanel';
import { useColumnToggleDropdown } from '../../hooks/useColumnToggleDropdown';
import { dropdownWrapperClass } from '../../styles/ColumnToggleDropdown.styles';

export function ColumnToggleDropdown<T>({
  columns,
  columnVisibility,
  onToggle,
}: ColumnToggleDropdownProps<T>) {
  const { isOpen, toggle, ref } = useColumnToggleDropdown();

  return (
    <div ref={ref} className={dropdownWrapperClass}>
      <ColumnToggleButton isOpen={isOpen} onToggle={toggle} />
      {isOpen && (
        <ColumnTogglePanel
          columns={columns}
          columnVisibility={columnVisibility}
          onToggle={onToggle}
        />
      )}
    </div>
  );
}
