import type { DataGridTableProps } from '../types/DataGrid.types';
import { DataGridStatus } from '../constants/DataGrid.constants';
import { DataGridTableHead } from './DataGridTableHead';
import { DataGridTableBody } from './DataGridTableBody';
import { DataGridTableSkeleton } from './DataGridTableSkeleton';
import { DataGridTableEmpty } from './DataGridTableEmpty';
import { tableWrapperClass, tableClass, tableStyle } from '../styles/DataGridTable.styles';

export function DataGridTable<T extends object>({
  visibleColumns,
  paginatedData,
  status,
  sortConfig,
  columnFilters,
  onSort,
  onFilter,
}: DataGridTableProps<T>) {
  const colCount = visibleColumns.length;
  const isLoading = status === DataGridStatus.Loading;
  const isEmpty = !isLoading && paginatedData.length === 0;

  return (
    <div className={tableWrapperClass}>
      <table className={tableClass} style={tableStyle}>
        <DataGridTableHead
          visibleColumns={visibleColumns}
          sortConfig={sortConfig}
          columnFilters={columnFilters}
          onSort={onSort}
          onFilter={onFilter}
        />

        <tbody>
          {isLoading && <DataGridTableSkeleton cols={colCount} />}
          {isEmpty && <DataGridTableEmpty cols={colCount} />}
          {!isLoading && !isEmpty && (
            <DataGridTableBody
              visibleColumns={visibleColumns}
              paginatedData={paginatedData}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}
