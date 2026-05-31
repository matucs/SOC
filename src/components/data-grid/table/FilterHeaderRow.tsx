import type { FilterHeaderRowProps } from '../types/DataGrid.types';
import { FilterColumnCell } from './FilterColumnCell';

export function FilterHeaderRow<T extends object>({
  visibleColumns,
  columnFilters,
  onFilter,
}: FilterHeaderRowProps<T>) {
  return (
    <tr>
      {visibleColumns.map((col) => (
        <FilterColumnCell
          key={String(col.accessor)}
          label={col.label}
          accessor={col.accessor}
          filterable={col.filterable}
          value={columnFilters[String(col.accessor)] ?? ''}
          onFilter={onFilter}
        />
      ))}
    </tr>
  );
}
