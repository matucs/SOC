import {
  PAGINATION_BORDER_COLOR,
  PAGINATION_SELECT_BG,
} from '../constants/DataGridPagination.constants';

export const paginationBarClass =
  'flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 px-2 py-2 sm:px-3 sm:py-2.5 border-t shrink-0';

export const pageSizeRowClass = 'flex items-center gap-2';

export const pageSizeLabelClass = 'text-xs text-slate-500';

export const pageSizeSelectClass =
  'text-xs px-2 py-1 rounded border bg-transparent text-slate-300 focus:outline-none focus:border-cyan-500/50 cursor-pointer font-mono';

export const pageControlsClass =
  'flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto';

export const pageLabelClass = 'text-xs text-slate-500 font-mono';

export const pageCurrentClass = 'text-slate-300';

export const paginationBarStyle = { borderColor: PAGINATION_BORDER_COLOR };

export const pageSizeSelectStyle = {
  borderColor: PAGINATION_BORDER_COLOR,
  background: PAGINATION_SELECT_BG,
};

export const pageSizeOptionStyle = { background: PAGINATION_SELECT_BG };
