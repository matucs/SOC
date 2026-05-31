import {
  CHECK_ICON_SIZE,
  CHECK_ICON_VIEWBOX,
  CHECK_ICON_PATH,
  ICON_STROKE,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_STROKE_LINEJOIN,
  ICON_FILL_NONE,
} from './Icons.constants';

export const CheckIcon = () => (
  <svg width={CHECK_ICON_SIZE} height={CHECK_ICON_SIZE} viewBox={CHECK_ICON_VIEWBOX} fill={ICON_FILL_NONE}>
    <path
      d={CHECK_ICON_PATH}
      stroke={ICON_STROKE}
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
      strokeLinejoin={ICON_STROKE_LINEJOIN}
    />
  </svg>
);
