import {
  CHECK_CIRCLE_ICON_SIZE,
  CHECK_CIRCLE_ICON_VIEWBOX,
  CHECK_CIRCLE_ICON_PATH,
  CHECK_CIRCLE_ICON_STROKE,
  CHECK_CIRCLE_ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_STROKE_LINEJOIN,
  ICON_FILL_NONE,
} from './Icons.constants';

export const CheckCircleIcon = () => (
  <svg
    width={CHECK_CIRCLE_ICON_SIZE}
    height={CHECK_CIRCLE_ICON_SIZE}
    viewBox={CHECK_CIRCLE_ICON_VIEWBOX}
    fill={ICON_FILL_NONE}
  >
    <path
      d={CHECK_CIRCLE_ICON_PATH}
      stroke={CHECK_CIRCLE_ICON_STROKE}
      strokeWidth={CHECK_CIRCLE_ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
      strokeLinejoin={ICON_STROKE_LINEJOIN}
    />
  </svg>
);
