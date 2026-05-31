import {
  PLUS_ICON_SIZE,
  PLUS_ICON_VIEWBOX,
  PLUS_ICON_PATH,
  ICON_STROKE,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_FILL_NONE,
} from './Icons.constants';

export const PlusIcon = () => (
  <svg width={PLUS_ICON_SIZE} height={PLUS_ICON_SIZE} viewBox={PLUS_ICON_VIEWBOX} fill={ICON_FILL_NONE}>
    <path
      d={PLUS_ICON_PATH}
      stroke={ICON_STROKE}
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
    />
  </svg>
);
