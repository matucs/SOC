import {
  EMPTY_STATE_ICON_SIZE,
  EMPTY_STATE_ICON_VIEWBOX,
  EMPTY_STATE_ICON_CIRCLE,
  EMPTY_STATE_ICON_PATH,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_FILL_NONE,
} from './Icons.constants';

export interface EmptyStateIconProps {
  className?: string;
}

export const EmptyStateIcon = ({ className }: EmptyStateIconProps) => (
  <svg
    width={EMPTY_STATE_ICON_SIZE}
    height={EMPTY_STATE_ICON_SIZE}
    viewBox={EMPTY_STATE_ICON_VIEWBOX}
    fill={ICON_FILL_NONE}
    className={className}
  >
    <circle
      cx={EMPTY_STATE_ICON_CIRCLE.cx}
      cy={EMPTY_STATE_ICON_CIRCLE.cy}
      r={EMPTY_STATE_ICON_CIRCLE.r}
      stroke="currentColor"
      strokeWidth={ICON_STROKE_WIDTH}
    />
    <path
      d={EMPTY_STATE_ICON_PATH}
      stroke="currentColor"
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
    />
  </svg>
);
