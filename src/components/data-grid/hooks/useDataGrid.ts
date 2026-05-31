import { useState, useMemo, useCallback } from 'react';
import type { ColumnDef, SortConfig, SortDirection, UseDataGridReturn } from '../types/DataGrid.types';
import { PAGE_SIZE_OPTIONS, SortDirection as SortDir } from '../constants/DataGrid.constants';
import type { PageSize } from '../constants/DataGrid.constants';
import { applyFilters, applySort } from '../utils/dataGrid.utils';

export function useDataGrid<T extends object>(
  data: T[],
  columns: ColumnDef<T>[],
): UseDataGridReturn<T> {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({});
  const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>(
    () => Object.fromEntries(columns.map((c) => [String(c.accessor), !c.hidden])),
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState<PageSize>(25);

  const visibleColumns = useMemo(
    () => columns.filter((c) => columnVisibility[String(c.accessor)] !== false),
    [columns, columnVisibility],
  );

  const sortedAndFilteredData = useMemo(
    () => applySort(applyFilters(data, columnFilters), sortConfig),
    [data, columnFilters, sortConfig],
  );

  const totalPages = Math.max(1, Math.ceil(sortedAndFilteredData.length / pageSize));

  const paginatedData = useMemo(
    () => sortedAndFilteredData.slice(currentPage * pageSize, (currentPage + 1) * pageSize),
    [sortedAndFilteredData, currentPage, pageSize],
  );

  const toggleSort = useCallback((accessor: keyof T) => {
    setSortConfig((prev) => {
      if (prev?.accessor === accessor) {
        const next: SortDirection =
          prev.direction === SortDir.Asc ? SortDir.Desc : SortDir.Asc;
        return { accessor, direction: next };
      }
      return { accessor, direction: SortDir.Asc };
    });
    setCurrentPage(0);
  }, []);

  const setColumnFilter = useCallback((accessor: keyof T, value: string) => {
    setColumnFilters((prev) => ({ ...prev, [String(accessor)]: value }));
    setCurrentPage(0);
  }, []);

  const toggleColumn = useCallback((accessor: keyof T) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [String(accessor)]: !prev[String(accessor)],
    }));
  }, []);

  const handleSetPageSize = useCallback((size: PageSize) => {
    setPageSize(size);
    setCurrentPage(0);
  }, []);

  return {
    visibleColumns,
    sortedAndFilteredData,
    paginatedData,
    totalPages,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize: handleSetPageSize,
    sortConfig,
    toggleSort,
    columnFilters,
    setColumnFilter,
    columnVisibility,
    toggleColumn,
    pageSizeOptions: PAGE_SIZE_OPTIONS,
  };
}
