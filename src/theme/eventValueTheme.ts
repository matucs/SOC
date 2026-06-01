import type { EventType, Severity, EventStatus } from '../data/types';
import { tokens } from './tokens';

/** Inline accent for form selects — hex values aligned with Badge.styles text/border classes. */
export interface EventValueAccent {
  color: string;
  borderColor: string;
  background: string;
}

const badgeBg = tokens.bgSurface;

export const severityAccents: Record<Severity, EventValueAccent> = {
  critical: {
    color: '#f87171',
    borderColor: 'rgba(239,68,68,0.6)',
    background: badgeBg,
  },
  high: {
    color: '#fbbf24',
    borderColor: 'rgba(245,158,11,0.6)',
    background: badgeBg,
  },
  medium: {
    color: '#facc15',
    borderColor: 'rgba(202,138,4,0.6)',
    background: badgeBg,
  },
  low: {
    color: '#4ade80',
    borderColor: 'rgba(34,197,94,0.6)',
    background: badgeBg,
  },
};

export const typeAccents: Record<EventType, EventValueAccent> = {
  access: {
    color: '#60a5fa',
    borderColor: 'rgba(59,130,246,0.4)',
    background: badgeBg,
  },
  camera: {
    color: '#c084fc',
    borderColor: 'rgba(168,85,247,0.4)',
    background: badgeBg,
  },
  alarm: {
    color: '#f87171',
    borderColor: 'rgba(239,68,68,0.4)',
    background: badgeBg,
  },
  system: {
    color: '#94a3b8',
    borderColor: 'rgba(100,116,139,0.4)',
    background: badgeBg,
  },
};

export const statusAccents: Record<EventStatus, EventValueAccent> = {
  open: {
    color: '#f87171',
    borderColor: 'rgba(239,68,68,0.4)',
    background: badgeBg,
  },
  acknowledged: {
    color: '#fbbf24',
    borderColor: 'rgba(245,158,11,0.4)',
    background: badgeBg,
  },
  resolved: {
    color: '#4ade80',
    borderColor: 'rgba(34,197,94,0.4)',
    background: badgeBg,
  },
};

export const locationAccent: EventValueAccent = {
  color: '#94a3b8',
  borderColor: tokens.border,
  background: badgeBg,
};
