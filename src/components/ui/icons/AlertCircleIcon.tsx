import {
  ALERT_ICON_PATHS,
  ICON_FILL_NONE,
  ICON_STROKE,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  type AlertIconSize,
} from './Icon.constants';

export interface AlertCircleIconProps {
  size?: AlertIconSize;
  className?: string;
}

export const AlertCircleIcon = ({ size = 'md', className }: AlertCircleIconProps) => {
  const cfg = ALERT_ICON_PATHS[size];
  return (
    <svg
      width={cfg.size}
      height={cfg.size}
      viewBox={cfg.viewBox}
      fill={ICON_FILL_NONE}
      className={className}
    >
      <circle
        cx={cfg.circle.cx}
        cy={cfg.circle.cy}
        r={cfg.circle.r}
        stroke={ICON_STROKE}
        strokeWidth={ICON_STROKE_WIDTH}
      />
      <path
        d={cfg.path}
        stroke={ICON_STROKE}
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinecap={ICON_STROKE_LINECAP}
      />
    </svg>
  );
};
