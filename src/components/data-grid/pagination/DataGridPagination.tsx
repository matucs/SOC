import type { DataGridPaginationProps } from '../types/DataGrid.types';
import { PageSizeSelector } from './PageSizeSelector';
import { PageControls } from './PageControls';
import { paginationBarClass, paginationBarStyle } from '../styles/DataGridPagination.styles';

export const DataGridPagination = ({
  currentPage,
  totalPages,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onPageSizeChange,
}: DataGridPaginationProps) => (
  <div className={paginationBarClass} style={paginationBarStyle}>
    <PageSizeSelector
      pageSize={pageSize}
      pageSizeOptions={pageSizeOptions}
      onPageSizeChange={onPageSizeChange}
    />
    <PageControls
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </div>
);
