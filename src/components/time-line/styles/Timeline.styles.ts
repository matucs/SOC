import { tokens } from '../../../theme/tokens';

// ── Timeline ──────────────────────────────────────────────────────────────────
export const timelineContainerClass = 'flex flex-col h-full min-h-0';
export const timelineEmptyClass =
  'flex items-center justify-center py-16 text-slate-600 text-sm';
export const timelineHeaderClass =
  'flex items-center justify-between px-1 pb-3 mb-2 border-b shrink-0';
export const timelineHeaderStyle = { borderColor: tokens.border };
export const timelineLiveRegionClass = 'sr-only';
export const timelineCounterClass = 'text-xs text-slate-500';
export const timelineCountHighlightClass = 'font-mono text-cyan-400';
export const timelineGroupCountHighlightClass = 'font-mono text-slate-400';
export const timelineHintClass = 'hidden sm:inline text-[10px] text-slate-600 font-mono';
export const timelineScrollClass = 'overflow-y-auto flex-1 min-h-0 pr-1';
