import type { DataGridTableBodyProps } from '../types/DataGrid.types';
import { getDataGridRowKey } from '../utils/dataGridTableBody.utils';
import { DataGridTableRow } from './dataGridTableRow';

export function DataGridTableBody<T extends object>({
  visibleColumns,
  paginatedData,
  onRowActivate,
  getRowAriaLabel,
}: DataGridTableBodyProps<T>) {
  return (
    <>
      {paginatedData.map((row, rowIndex) => (
        <DataGridTableRow
          key={getDataGridRowKey(row, rowIndex)}
          row={row}
          visibleColumns={visibleColumns}
          onActivate={onRowActivate}
          getAriaLabel={getRowAriaLabel}
        />
      ))}
    </>
  );
}
