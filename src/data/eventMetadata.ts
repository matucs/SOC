import type { EventType, Severity } from './types';
import { tokens } from '../theme/tokens';

export const TYPE_ICONS: Record<EventType, string> = {
  access: '🔑',
  camera: '📷',
  alarm: '🚨',
  system: '⚙️',
};

export const TYPE_LABELS: Record<EventType, string> = {
  access: 'Access',
  camera: 'Camera',
  alarm: 'Alarm',
  system: 'System',
};

export const formatTypeOptionLabel = (type: EventType) =>
  `${TYPE_ICONS[type]} ${TYPE_LABELS[type]}`;

export const SEVERITY_DOT_COLORS: Record<Severity, string> = {
  critical: tokens.danger,
  high: tokens.warning,
  medium: tokens.warningMedium,
  low: tokens.success,
};
