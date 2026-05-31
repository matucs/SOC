import type React from 'react';
import type { PageSize, PAGE_SIZE_OPTIONS, DataGridStatus, SortDirection } from '../constants/DataGrid.constants';

export type { DataGridStatus, SortDirection };

// ── Core ──────────────────────────────────────────────────────────────────────
export interface ColumnDef<T> {
  accessor: keyof T;
  label: string;
  hidden?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface SortConfig<T> {
  accessor: keyof T;
  direction: SortDirection;
}

// ── DataGrid ──────────────────────────────────────────────────────────────────
export interface DataGridProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  status?: DataGridStatus;
  errorMessage?: string;
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export interface UseDataGridReturn<T> {
  visibleColumns: ColumnDef<T>[];
  sortedAndFilteredData: T[];
  paginatedData: T[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: PageSize;
  setPageSize: (size: PageSize) => void;
  sortConfig: SortConfig<T> | null;
  toggleSort: (accessor: keyof T) => void;
  columnFilters: Record<string, string>;
  setColumnFilter: (accessor: keyof T, value: string) => void;
  columnVisibility: Record<string, boolean>;
  toggleColumn: (accessor: keyof T) => void;
  pageSizeOptions: typeof PAGE_SIZE_OPTIONS;
}

// ── Sub-component props ───────────────────────────────────────────────────────
export interface DataGridTableProps<T> {
  visibleColumns: ColumnDef<T>[];
  paginatedData: T[];
  status: DataGridStatus;
  sortConfig: SortConfig<T> | null;
  columnFilters: Record<string, string>;
  onSort: (accessor: keyof T) => void;
  onFilter: (accessor: keyof T, value: string) => void;
}

export interface DataGridTableHeadProps<T> {
  visibleColumns: ColumnDef<T>[];
  sortConfig: SortConfig<T> | null;
  columnFilters: Record<string, string>;
  onSort: (accessor: keyof T) => void;
  onFilter: (accessor: keyof T, value: string) => void;
}

export interface SortableColumnHeaderProps<T> {
  label: string;
  accessor: keyof T;
  sortable?: boolean;
  isSorted: boolean;
  direction: SortDirection | undefined;
  onSort: (accessor: keyof T) => void;
}

export interface SortButtonProps {
  label: string;
  isSorted: boolean;
  direction: SortDirection | undefined;
  onClick: () => void;
}

export interface NonSortableLabelProps {
  label: string;
}

export interface FilterColumnCellProps<T> {
  label: string;
  accessor: keyof T;
  filterable?: boolean;
  value: string;
  onFilter: (accessor: keyof T, value: string) => void;
}

export interface SortHeaderRowProps<T> {
  visibleColumns: ColumnDef<T>[];
  sortConfig: SortConfig<T> | null;
  onSort: (accessor: keyof T) => void;
}

export interface FilterHeaderRowProps<T> {
  visibleColumns: ColumnDef<T>[];
  columnFilters: Record<string, string>;
  onFilter: (accessor: keyof T, value: string) => void;
}

export interface DataGridTableBodyProps<T> {
  visibleColumns: ColumnDef<T>[];
  paginatedData: T[];
}

export interface DataGridTableSkeletonProps {
  cols: number;
}

export interface DataGridTableEmptyProps {
  cols: number;
}

export interface ColumnToggleDropdownProps<T> {
  columns: ColumnDef<T>[];
  columnVisibility: Record<string, boolean>;
  onToggle: (accessor: keyof T) => void;
}

export interface ColumnToggleItemProps<T> {
  label: string;
  accessor: keyof T;
  isVisible: boolean;
  onToggle: (accessor: keyof T) => void;
}

export interface ColumnToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface ColumnTogglePanelProps<T> {
  columns: ColumnDef<T>[];
  columnVisibility: Record<string, boolean>;
  onToggle: (accessor: keyof T) => void;
}

export interface DataGridToolbarProps<T> {
  totalFiltered: number;
  totalAll: number;
  isLoading: boolean;
  columns: ColumnDef<T>[];
  columnVisibility: Record<string, boolean>;
  onToggleColumn: (accessor: keyof T) => void;
}

export interface EventCountProps {
  totalFiltered: number;
  totalAll: number;
  isLoading: boolean;
}

export interface EventCountSummaryProps {
  totalFiltered: number;
  totalAll: number;
}

export interface DataGridPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: PageSize;
  pageSizeOptions: typeof PAGE_SIZE_OPTIONS;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: PageSize) => void;
}

export interface PageSizeSelectorProps {
  pageSize: PageSize;
  pageSizeOptions: DataGridPaginationProps['pageSizeOptions'];
  onPageSizeChange: DataGridPaginationProps['onPageSizeChange'];
}

export interface PageControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: DataGridPaginationProps['onPageChange'];
}
