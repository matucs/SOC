import type { Severity, EventType, EventStatus } from '../../../data/types';
import type { SeverityConfig, TypeConfig, StatusConfig } from './Badge.types';
import { TYPE_ICONS } from '../../../data/eventMetadata';

// ── Shared badge base classes ─────────────────────────────────────────────────
export const badgeBaseClass =
  'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium border font-mono uppercase tracking-wider';

export const typeBadgeGapClass = 'gap-1';

export const typeIconClass = 'text-[10px]';

export const statusBadgeClass =
  'inline-flex items-center gap-1.5 text-xs font-medium font-mono';

export const getColoredBadgeClass = (cfg: Pick<SeverityConfig, 'bg' | 'border' | 'text'>) =>
  `${badgeBaseClass} ${cfg.bg} ${cfg.border} ${cfg.text}`;

export const getTypeBadgeClass = (cfg: Pick<TypeConfig, 'bg' | 'border' | 'text'>) =>
  `${badgeBaseClass} ${typeBadgeGapClass} ${cfg.bg} ${cfg.border} ${cfg.text}`;

export const getStatusBadgeClass = (cfg: Pick<StatusConfig, 'text'>) =>
  `${statusBadgeClass} ${cfg.text}`;

// ── Severity config ───────────────────────────────────────────────────────────
export const severityConfig: Record<Severity, SeverityConfig> = {
  critical: { bg: 'bg-red-950/60', border: 'border-red-500/60', text: 'text-red-400', dot: 'red', pulse: true },
  high: { bg: 'bg-amber-950/60', border: 'border-amber-500/60', text: 'text-amber-400', dot: 'amber', pulse: false },
  medium: { bg: 'bg-yellow-950/60', border: 'border-yellow-600/60', text: 'text-yellow-400', dot: 'amber', pulse: false },
  low: { bg: 'bg-green-950/60', border: 'border-green-600/60', text: 'text-green-400', dot: 'green', pulse: false },
};

// ── Type config ───────────────────────────────────────────────────────────────
export const typeConfig: Record<EventType, TypeConfig> = {
  access: { bg: 'bg-blue-950/60', border: 'border-blue-500/40', text: 'text-blue-400', icon: TYPE_ICONS.access },
  camera: { bg: 'bg-purple-950/60', border: 'border-purple-500/40', text: 'text-purple-400', icon: TYPE_ICONS.camera },
  alarm: { bg: 'bg-red-950/60', border: 'border-red-500/40', text: 'text-red-400', icon: TYPE_ICONS.alarm },
  system: { bg: 'bg-slate-800/60', border: 'border-slate-500/40', text: 'text-slate-400', icon: TYPE_ICONS.system },
};

// ── Status config ─────────────────────────────────────────────────────────────
export const statusConfig: Record<EventStatus, StatusConfig> = {
  open: { dot: 'red', text: 'text-red-400', label: 'Open', pulse: true },
  acknowledged: { dot: 'amber', text: 'text-amber-400', label: 'Acknowledged', pulse: false },
  resolved: { dot: 'green', text: 'text-green-400', label: 'Resolved', pulse: false },
};
