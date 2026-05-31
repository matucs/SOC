import {
  COLUMNS_ICON_SIZE,
  COLUMNS_ICON_VIEWBOX,
  COLUMNS_ICON_CIRCLE,
  COLUMNS_ICON_RAYS,
  ICON_STROKE,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_FILL_NONE,
} from './Icons.constants';

export const ColumnsIcon = () => (
  <svg width={COLUMNS_ICON_SIZE} height={COLUMNS_ICON_SIZE} viewBox={COLUMNS_ICON_VIEWBOX} fill={ICON_FILL_NONE}>
    <circle
      cx={COLUMNS_ICON_CIRCLE.cx}
      cy={COLUMNS_ICON_CIRCLE.cy}
      r={COLUMNS_ICON_CIRCLE.r}
      stroke={ICON_STROKE}
      strokeWidth={ICON_STROKE_WIDTH}
    />
    <path
      d={COLUMNS_ICON_RAYS}
      stroke={ICON_STROKE}
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
    />
  </svg>
);
