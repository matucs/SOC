import {
  SECTION_ICON_SIZE,
  SECTION_ICON_VIEWBOX,
  SECTION_ICON_STROKE,
  SECTION_ICON_STROKE_WIDTH,
  SECTION_CLOCK_CIRCLE,
  SECTION_CLOCK_PATH,
  ICON_STROKE_LINECAP,
  ICON_FILL_NONE,
} from './Icons.constants';

export const SectionClockIcon = () => (
  <svg width={SECTION_ICON_SIZE} height={SECTION_ICON_SIZE} viewBox={SECTION_ICON_VIEWBOX} fill={ICON_FILL_NONE}>
    <circle
      cx={SECTION_CLOCK_CIRCLE.cx}
      cy={SECTION_CLOCK_CIRCLE.cy}
      r={SECTION_CLOCK_CIRCLE.r}
      stroke={SECTION_ICON_STROKE}
      strokeWidth={SECTION_ICON_STROKE_WIDTH}
    />
    <path
      d={SECTION_CLOCK_PATH}
      stroke={SECTION_ICON_STROKE}
      strokeWidth={SECTION_ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
    />
  </svg>
);
