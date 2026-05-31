import {
  CLOSE_ICON_SIZE,
  CLOSE_ICON_VIEWBOX,
  CLOSE_ICON_PATH,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_FILL_NONE,
} from './Icons.constants';

export const CloseIcon = () => (
  <svg width={CLOSE_ICON_SIZE} height={CLOSE_ICON_SIZE} viewBox={CLOSE_ICON_VIEWBOX} fill={ICON_FILL_NONE}>
    <path
      d={CLOSE_ICON_PATH}
      stroke="currentColor"
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
    />
  </svg>
);
