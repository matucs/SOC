import {
  GROUP_ACCENT_COLOR,
  GROUP_BORDER_COLOR,
  GROUP_COUNT_BADGE_BG,
  GROUP_COUNT_BADGE_BORDER,
  GROUP_LINE_GRADIENT,
  GROUP_LINE_WIDTH,
} from '../constants/TimelineGroup.constants';

export const groupContainerClass = 'mb-6';
export const groupHeaderBaseClass =
  'flex items-center gap-3 mb-3 px-1 py-1.5 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500/40';
export const groupHeaderFocusedClass = 'bg-cyan-500/5';
export const groupLabelClass =
  'text-[10px] sm:text-xs font-semibold uppercase tracking-widest font-mono truncate';
export const groupDividerClass = 'flex-1 h-px';
export const groupCountBadgeClass = 'text-xs font-mono px-2 py-0.5 rounded';
export const groupItemsClass = 'relative ml-4';
export const groupLineClass = 'absolute left-2 top-0 bottom-3';

export const groupLabelStyle = { color: GROUP_ACCENT_COLOR };
export const groupDividerStyle = { background: GROUP_BORDER_COLOR };
export const groupCountBadgeStyle = {
  background: GROUP_COUNT_BADGE_BG,
  color: GROUP_ACCENT_COLOR,
  border: GROUP_COUNT_BADGE_BORDER,
};
export const groupLineStyle = {
  width: GROUP_LINE_WIDTH,
  background: GROUP_LINE_GRADIENT,
};

export const getGroupHeaderClass = (isHeaderFocused: boolean) =>
  `${groupHeaderBaseClass} ${isHeaderFocused ? groupHeaderFocusedClass : ''}`;
