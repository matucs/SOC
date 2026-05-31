import type { DataGridToolbarProps } from '../types/DataGrid.types';
import { EventCount } from './eventCount';
import { ColumnToggleDropdown } from './columnToggleDropdown';
import { toolbarBarClass, toolbarBarStyle } from '../styles/DataGridToolbar.styles';

export function DataGridToolbar<T>({
  totalFiltered,
  totalAll,
  isLoading,
  columns,
  columnVisibility,
  onToggleColumn,
}: DataGridToolbarProps<T>) {
  return (
    <div className={toolbarBarClass} style={toolbarBarStyle}>
      <EventCount
        totalFiltered={totalFiltered}
        totalAll={totalAll}
        isLoading={isLoading}
      />
      <ColumnToggleDropdown
        columns={columns}
        columnVisibility={columnVisibility}
        onToggle={onToggleColumn}
      />
    </div>
  );
}
