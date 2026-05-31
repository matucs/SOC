import type { StatusDotProps } from './StatusDot.types';
import { PULSE_RING_ANIMATION, pulseSizeMap } from './StatusDot.constants';

export const colorMap: Record<StatusDotProps['color'], string> = {
  green: 'bg-green-400',
  amber: 'bg-amber-400',
  red: 'bg-red-500',
  cyan: 'bg-cyan-400',
  gray: 'bg-slate-500',
};

export const dotSizeMap: Record<NonNullable<StatusDotProps['size']>, string> = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
};

export const dotWrapperClass = 'relative inline-flex items-center justify-center';
export const pulseRingClass = 'absolute inline-flex rounded-full opacity-60';
export const dotBaseClass = 'inline-flex rounded-full';
export const pulseDotClass = 'pulse-dot';

export const getPulseRingStyle = (size: NonNullable<StatusDotProps['size']>) => ({
  width: pulseSizeMap[size],
  height: pulseSizeMap[size],
  animation: PULSE_RING_ANIMATION,
});

export const getDotClass = (
  size: NonNullable<StatusDotProps['size']>,
  color: StatusDotProps['color'],
  pulse: boolean,
) => `${dotBaseClass} ${dotSizeMap[size]} ${colorMap[color]} ${pulse ? pulseDotClass : ''}`.trim();
