import {
  BORDER_COLOR,
  HEADER_TEXT_COLOR,
} from '../constants/DataGridTable.constants';

export const columnHeaderClass =
  'px-3 pt-3 pb-1 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap border-b';
export const sortButtonClass =
  'inline-flex items-center gap-1 hover:text-slate-300 transition-colors font-mono';
export const nonSortableLabelClass = 'font-mono';

export const columnHeaderStyle = { borderColor: BORDER_COLOR, color: HEADER_TEXT_COLOR };
