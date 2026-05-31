import type { SeverityBadgeProps, TypeBadgeProps, StatusBadgeProps } from './Badge.types';
import { StatusDot } from '../StatusDot';
import {
  typeIconClass,
  severityConfig,
  typeConfig,
  statusConfig,
  getColoredBadgeClass,
  getTypeBadgeClass,
  getStatusBadgeClass,
} from './Badge.styles';

export const SeverityBadge = ({ severity }: SeverityBadgeProps) => {
  const cfg = severityConfig[severity];
  return (
    <span className={getColoredBadgeClass(cfg)}>
      <StatusDot color={cfg.dot} pulse={cfg.pulse} />
      {severity}
    </span>
  );
};

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  const cfg = typeConfig[type];
  return (
    <span className={getTypeBadgeClass(cfg)}>
      <span className={typeIconClass}>{cfg.icon}</span>
      {type}
    </span>
  );
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const cfg = statusConfig[status];
  return (
    <span className={getStatusBadgeClass(cfg)}>
      <StatusDot color={cfg.dot} pulse={cfg.pulse} />
      {cfg.label}
    </span>
  );
};
