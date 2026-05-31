export const ICON_STROKE = 'currentColor';
export const ICON_FILL_NONE = 'none';
export const ICON_STROKE_WIDTH = 1.5;
export const ICON_STROKE_LINECAP = 'round' as const;
export const ICON_STROKE_LINEJOIN = 'round' as const;

export const ALERT_ICON_PATHS = {
  sm: { viewBox: '0 0 10 10', circle: { cx: 5, cy: 5, r: 4.5 }, path: 'M5 3v2.5M5 7h.01', size: 10 },
  md: { viewBox: '0 0 16 16', circle: { cx: 8, cy: 8, r: 7 }, path: 'M8 5v3.5M8 11h.01', size: 16 },
} as const;

export type AlertIconSize = keyof typeof ALERT_ICON_PATHS;
