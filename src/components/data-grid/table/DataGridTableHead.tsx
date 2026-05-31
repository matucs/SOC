import type { DataGridTableHeadProps } from '../types/DataGrid.types';
import { SortHeaderRow } from './SortHeaderRow';
import { FilterHeaderRow } from './FilterHeaderRow';
import { theadClass, theadStyle } from '../styles/DataGridTable.styles';

export function DataGridTableHead<T extends object>({
  visibleColumns,
  sortConfig,
  columnFilters,
  onSort,
  onFilter,
}: DataGridTableHeadProps<T>) {
  return (
    <thead className={theadClass} style={theadStyle}>
      <SortHeaderRow
        visibleColumns={visibleColumns}
        sortConfig={sortConfig}
        onSort={onSort}
      />
      <FilterHeaderRow
        visibleColumns={visibleColumns}
        columnFilters={columnFilters}
        onFilter={onFilter}
      />
    </thead>
  );
}
