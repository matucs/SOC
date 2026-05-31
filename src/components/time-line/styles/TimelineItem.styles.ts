import type { SecurityEvent } from '../../../data/types';
import {
  CRITICAL_GLOW,
  CRITICAL_SEVERITY,
  DOT_COLUMN_WIDTH,
  DOT_SIZE,
  severityDotColor,
} from '../constants/TimelineItem.constants';

export const itemRowClass = 'flex gap-3 relative pl-1';
export const itemDotColClass = 'relative flex-shrink-0 flex flex-col items-center';
export const itemDotClass = 'absolute top-3';
export const itemCardBaseClass =
  'flex-1 mb-3 p-3 rounded border transition-all duration-150 cursor-default focus:outline-none';
export const itemCardFocusedClass = 'border-cyan-500/40 bg-slate-800/50';
export const itemCardIdleClass =
  'border-transparent bg-slate-900/40 hover:bg-slate-800/30 hover:border-slate-700/40';
export const itemCardStyle = { minWidth: 0 };
export const itemHeaderRowClass = 'flex items-start justify-between gap-2 mb-1.5';
export const itemTitleClass = 'text-xs font-medium text-slate-200 leading-snug line-clamp-2';
export const itemTimeClass =
  'text-[10px] text-slate-600 font-mono whitespace-nowrap shrink-0 pt-0.5';
export const itemTagsRowClass = 'flex flex-wrap items-center gap-1.5';
export const itemLocationClass = 'text-[10px] text-slate-500 font-mono';

export const itemDotColStyle = { width: DOT_COLUMN_WIDTH };

export const getItemCardClass = (isFocused: boolean) =>
  `${itemCardBaseClass} ${isFocused ? itemCardFocusedClass : itemCardIdleClass}`;

export const getSeverityDotStyle = (severity: SecurityEvent['severity']) => {
  const color = severityDotColor[severity];
  return {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: '50%',
    backgroundColor: color,
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: severity === CRITICAL_SEVERITY ? `${CRITICAL_GLOW} ${color}` : 'none',
  };
};
