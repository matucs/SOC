import type { EventType, Severity, EventStatus } from '../../../data/types';
import type { StatusDotProps } from '../StatusDot/StatusDot.types';

type DotColor = StatusDotProps['color'];

export interface SeverityConfig {
  bg: string;
  border: string;
  text: string;
  dot: DotColor;
  pulse: boolean;
}

export interface TypeConfig {
  bg: string;
  border: string;
  text: string;
  icon: string;
}

export interface StatusConfig {
  dot: DotColor;
  text: string;
  label: string;
  pulse: boolean;
}

export interface SeverityBadgeProps {
  severity: Severity;
}

export interface TypeBadgeProps {
  type: EventType;
}

export interface StatusBadgeProps {
  status: EventStatus;
}
