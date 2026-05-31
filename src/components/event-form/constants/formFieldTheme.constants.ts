import type { EventType, Severity, EventStatus } from '../../../data/types';

/** Matches data-grid badge / cell colors (App.styles + Badge.styles). */
export const GRID_MUTED_TEXT = '#94a3b8';

export interface FieldAccent {
  color: string;
  borderColor: string;
}

export const TYPE_FIELD_ACCENTS: Record<EventType, FieldAccent> = {
  access: { color: '#60a5fa', borderColor: 'rgba(59,130,246,0.4)' },
  camera: { color: '#c084fc', borderColor: 'rgba(168,85,247,0.4)' },
  alarm: { color: '#f87171', borderColor: 'rgba(239,68,68,0.4)' },
  system: { color: '#94a3b8', borderColor: 'rgba(100,116,139,0.4)' },
};

export const SEVERITY_FIELD_ACCENTS: Record<Severity, FieldAccent> = {
  low: { color: '#4ade80', borderColor: 'rgba(34,197,94,0.4)' },
  medium: { color: '#facc15', borderColor: 'rgba(202,138,4,0.4)' },
  high: { color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' },
  critical: { color: '#f87171', borderColor: 'rgba(239,68,68,0.5)' },
};

export const STATUS_FIELD_ACCENTS: Record<EventStatus, FieldAccent> = {
  open: { color: '#f87171', borderColor: 'rgba(239,68,68,0.4)' },
  acknowledged: { color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' },
  resolved: { color: '#4ade80', borderColor: 'rgba(34,197,94,0.4)' },
};

export const GRID_MUTED_FIELD_ACCENT: FieldAccent = {
  color: GRID_MUTED_TEXT,
  borderColor: '#1e2a3a',
};
