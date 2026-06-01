import type { EventType, Severity, EventStatus } from '../../../data/types';
import {
  locationAccent,
  severityAccents,
  statusAccents,
  typeAccents,
  type EventValueAccent,
} from '../../../theme/eventValueTheme';

export type { EventValueAccent as FieldAccent };

export const GRID_MUTED_TEXT = locationAccent.color;

export const TYPE_FIELD_ACCENTS: Record<EventType, EventValueAccent> = typeAccents;
export const SEVERITY_FIELD_ACCENTS: Record<Severity, EventValueAccent> = severityAccents;
export const STATUS_FIELD_ACCENTS: Record<EventStatus, EventValueAccent> = statusAccents;
export const GRID_MUTED_FIELD_ACCENT: EventValueAccent = locationAccent;
