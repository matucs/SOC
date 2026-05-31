import type { SortHeaderRowProps } from '../types/DataGrid.types';
import { SortableColumnHeader } from './sortableColumnHeader';
import { isColumnSorted } from '../utils/dataGridTable.utils';

export function SortHeaderRow<T extends object>({
  visibleColumns,
  sortConfig,
  onSort,
}: SortHeaderRowProps<T>) {
  return (
    <tr>
      {visibleColumns.map((col) => {
        const isSorted = isColumnSorted(sortConfig, col.accessor);
        return (
          <SortableColumnHeader
            key={String(col.accessor)}
            label={col.label}
            accessor={col.accessor}
            sortable={col.sortable}
            isSorted={isSorted}
            direction={isSorted ? sortConfig?.direction : undefined}
            onSort={onSort}
          />
        );
      })}
    </tr>
  );
}
