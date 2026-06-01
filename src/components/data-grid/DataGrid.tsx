import { memo, type JSX } from 'react';
import type { DataGridProps } from './types/DataGrid.types';
import { useDataGrid } from './hooks/useDataGrid';
import { DataGridToolbar } from './toolbar';
import { DataGridTable } from './table';
import { DataGridPagination } from './pagination';
import { gridContainerClass, errorBannerClass, errorIconClass } from './styles/DataGrid.styles';
import { DEFAULT_ERROR_MESSAGE } from './strings/DataGrid.strings';
import { AlertCircleIcon } from '../ui/icons';
import { DEFAULT_STATUS, DataGridStatus } from './constants/DataGrid.constants';

export const DataGrid = memo(function DataGrid<T extends object>({
  data,
  columns,
  status = DEFAULT_STATUS,
  errorMessage = DEFAULT_ERROR_MESSAGE,
  onRowActivate,
  getRowAriaLabel,
}: DataGridProps<T>) {
  const {
    visibleColumns,
    paginatedData,
    sortedAndFilteredData,
    totalPages,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    sortConfig,
    toggleSort,
    columnFilters,
    setColumnFilter,
    columnVisibility,
    toggleColumn,
    pageSizeOptions,
  } = useDataGrid(data, columns);

  if (status === DataGridStatus.Error) {
    return (
      <div className={errorBannerClass}>
        <AlertCircleIcon className={errorIconClass} />
        {errorMessage}
      </div>
    );
  }

  return (
    <div className={gridContainerClass}>
      <DataGridToolbar
        totalFiltered={sortedAndFilteredData.length}
        totalAll={data.length}
        isLoading={status === DataGridStatus.Loading}
        columns={columns}
        columnVisibility={columnVisibility}
        onToggleColumn={toggleColumn}
      />

      <DataGridTable
        visibleColumns={visibleColumns}
        paginatedData={paginatedData}
        status={status}
        sortConfig={sortConfig}
        columnFilters={columnFilters}
        onSort={toggleSort}
        onFilter={setColumnFilter}
        onRowActivate={onRowActivate}
        getRowAriaLabel={getRowAriaLabel}
      />

      <DataGridPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}) as <T extends object>(props: DataGridProps<T>) => JSX.Element;
