import React from 'react';
import type { StatusDotProps } from './StatusDot.types';
import {
  colorMap,
  dotWrapperClass,
  pulseRingClass,
  getPulseRingStyle,
  getDotClass,
} from './StatusDot.styles';

export const StatusDot: React.FC<StatusDotProps> = ({
  color,
  pulse = false,
  size = 'sm',
}) => (
  <span className={dotWrapperClass}>
    {pulse && (
      <span
        className={`${pulseRingClass} ${colorMap[color]}`}
        style={getPulseRingStyle(size)}
      />
    )}
    <span className={getDotClass(size, color, pulse)} />
  </span>
);
