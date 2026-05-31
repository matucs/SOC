import { tokens } from '../theme/tokens';

// ── Layout ────────────────────────────────────────────────────────────────────
export const appContainerClass =
  'flex flex-col h-dvh min-h-dvh overflow-hidden pb-[env(safe-area-inset-bottom)]';

export const mainClass =
  'flex flex-col lg:flex-row flex-1 min-h-0 overflow-y-auto lg:overflow-hidden';

export const sectionClass =
  'flex flex-col min-h-0 flex-none lg:flex-[0_0_60%] h-[48vh] min-h-[280px] lg:h-auto lg:min-h-0 border-b lg:border-b-0 lg:border-r border-[#1e2a3a]';

export const timelineSectionClass =
  'flex flex-col min-h-0 flex-1 lg:flex-[0_0_40%] min-h-[36vh] lg:min-h-0 overflow-hidden';

export const gridContentClass = 'flex-1 min-h-0 overflow-hidden';
export const timelineContentClass =
  'flex-1 min-h-0 overflow-hidden px-3 pt-2 sm:px-4 sm:pt-3';

// ── LiveClock ─────────────────────────────────────────────────────────────────
export const liveClockClass = 'font-mono text-xs text-slate-500 tabular-nums';

// ── EventCounter ──────────────────────────────────────────────────────────────
export const eventCounterClass = 'text-xs font-mono';
export const eventCounterBumpClass = 'bump';

// ── DataGrid cell renderers ───────────────────────────────────────────────────
export const idCellClass = 'font-mono text-cyan-600 text-[11px]';
export const locationCellClass = 'text-slate-400 font-mono text-[11px]';
export const timestampCellClass = 'font-mono text-slate-400 text-[11px]';

// ── Inline style objects ──────────────────────────────────────────────────────
export const appContainerStyle = { background: tokens.bgBase };

export const eventCounterStyle = { color: tokens.textMuted };
export const eventCounterHighlightStyle = { color: tokens.accent };
