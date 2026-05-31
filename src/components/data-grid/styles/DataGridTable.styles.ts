import {
  BORDER_COLOR,
  ROW_BORDER_COLOR,
  SKELETON_BASE_WIDTH,
  SKELETON_WIDTH_MOD,
  SKELETON_WIDTH_STEP,
  TABLE_MIN_WIDTH,
  THEAD_BG,
} from '../constants/DataGridTable.constants';

export const tableWrapperClass = 'overflow-auto flex-1 min-h-0';
export const tableClass = 'w-full text-sm';
export const theadClass = 'sticky top-0 z-10';
export const filterRowClass = 'px-3 pb-2 pt-0';
export const filterInputClass =
  'w-full text-xs px-2 py-1 rounded border bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono';
export const bodyRowClass = 'border-b hover:bg-slate-800/20 transition-colors';
export const bodyCellClass = 'px-3 py-2.5 text-xs text-slate-300';
export const skeletonCellClass = 'px-3 py-3 border-b';
export const skeletonBarClass = 'h-4 rounded animate-pulse';
export const emptyCellClass = 'flex flex-col items-center justify-center py-16 text-slate-600';
export const emptyIconClass = 'mb-3 opacity-40';
export const emptyHeadingClass = 'text-sm';
export const emptySubtextClass = 'text-xs mt-1 text-slate-700';

export const tableStyle = { minWidth: TABLE_MIN_WIDTH };
export const theadStyle = { background: THEAD_BG };
export const filterRowStyle = { background: THEAD_BG };
export const filterInputStyle = { borderColor: BORDER_COLOR };
export const bodyRowStyle = { borderColor: ROW_BORDER_COLOR };
export const skeletonCellStyle = { borderColor: BORDER_COLOR };

export const getSkeletonBarStyle = (index: number) => ({
  background: BORDER_COLOR,
  width: `${SKELETON_BASE_WIDTH + (index * SKELETON_WIDTH_STEP) % SKELETON_WIDTH_MOD}%`,
});
