import type { StatusDotProps } from './StatusDot.types';

export const PULSE_RING_ANIMATION = 'pulse-ring-outer 1.4s ease-out infinite';

export const pulseSizeMap: Record<NonNullable<StatusDotProps['size']>, string> = {
  sm: '14px',
  md: '18px',
};
