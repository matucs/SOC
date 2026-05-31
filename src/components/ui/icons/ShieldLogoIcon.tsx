import {
  SHIELD_LOGO_SIZE,
  SHIELD_LOGO_VIEWBOX,
  SHIELD_LOGO_PATH,
  SHIELD_LOGO_CHECK_PATH,
  SHIELD_LOGO_STROKE,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_STROKE_LINEJOIN,
  ICON_FILL_NONE,
} from './Icons.constants';

export const ShieldLogoIcon = () => (
  <svg width={SHIELD_LOGO_SIZE} height={SHIELD_LOGO_SIZE} viewBox={SHIELD_LOGO_VIEWBOX} fill={ICON_FILL_NONE}>
    <path
      d={SHIELD_LOGO_PATH}
      stroke={SHIELD_LOGO_STROKE}
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinejoin={ICON_STROKE_LINEJOIN}
    />
    <path
      d={SHIELD_LOGO_CHECK_PATH}
      stroke={SHIELD_LOGO_STROKE}
      strokeWidth={ICON_STROKE_WIDTH}
      strokeLinecap={ICON_STROKE_LINECAP}
      strokeLinejoin={ICON_STROKE_LINEJOIN}
    />
  </svg>
);
