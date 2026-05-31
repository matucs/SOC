import type { PageSizeSelectorProps } from '../types/DataGrid.types';
import type { PageSize } from '../constants/DataGrid.constants';
import { PAGINATION_ROWS_LABEL, ARIA_ROWS_PER_PAGE } from '../strings/DataGridPagination.strings';
import {
  pageSizeRowClass,
  pageSizeLabelClass,
  pageSizeSelectClass,
  pageSizeSelectStyle,
  pageSizeOptionStyle,
} from '../styles/DataGridPagination.styles';

export const PageSizeSelector = ({
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
}: PageSizeSelectorProps) => (
  <div className={pageSizeRowClass}>
    <span className={pageSizeLabelClass}>{PAGINATION_ROWS_LABEL}</span>
    <select
      value={pageSize}
      onChange={(e) => onPageSizeChange(Number(e.target.value) as PageSize)}
      className={pageSizeSelectClass}
      style={pageSizeSelectStyle}
      aria-label={ARIA_ROWS_PER_PAGE}
    >
      {pageSizeOptions.map((s) => (
        <option key={s} value={s} style={pageSizeOptionStyle}>
          {s}
        </option>
      ))}
    </select>
  </div>
);
