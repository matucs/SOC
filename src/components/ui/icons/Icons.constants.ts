import { tokens } from '../../../theme/tokens';
import {
  ICON_STROKE,
  ICON_FILL_NONE,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_STROKE_LINEJOIN,
} from './Icon.constants';

export {
  ICON_STROKE,
  ICON_FILL_NONE,
  ICON_STROKE_WIDTH,
  ICON_STROKE_LINECAP,
  ICON_STROKE_LINEJOIN,
};

// ── Plus (add event) ──────────────────────────────────────────────────────────
export const PLUS_ICON_SIZE = 12;
export const PLUS_ICON_VIEWBOX = '0 0 12 12';
export const PLUS_ICON_PATH = 'M6 1v10M1 6h10';

// ── Section headers ───────────────────────────────────────────────────────────
export const SECTION_ICON_SIZE = 13;
export const SECTION_ICON_VIEWBOX = '0 0 13 13';
export const SECTION_ICON_STROKE = tokens.textMuted;
export const SECTION_ICON_STROKE_WIDTH = 1.2;

export const GRID_ICON_RECT = { x: 1, y: 1, width: 11, height: 11, rx: 1.5 };
export const GRID_ICON_PATH = 'M1 4.5h11M4.5 4.5V12';

export const SECTION_CLOCK_CIRCLE = { cx: 6.5, cy: 6.5, r: 5.5 };
export const SECTION_CLOCK_PATH = 'M6.5 3.5v3l2 1.5';

// ── Shield logo ───────────────────────────────────────────────────────────────
export const SHIELD_LOGO_SIZE = 18;
export const SHIELD_LOGO_VIEWBOX = '0 0 18 18';
export const SHIELD_LOGO_PATH =
  'M9 1.5L2 5v4c0 3.87 3.07 7.26 7 8 3.93-.74 7-4.13 7-8V5L9 1.5z';
export const SHIELD_LOGO_CHECK_PATH = 'M6.5 9l2 2 3-3';
export const SHIELD_LOGO_STROKE = tokens.accent;

// ── Toolbar ───────────────────────────────────────────────────────────────────
export const COLUMNS_ICON_SIZE = 14;
export const COLUMNS_ICON_VIEWBOX = '0 0 14 14';
export const COLUMNS_ICON_CIRCLE = { cx: 7, cy: 7, r: 2.5 };
export const COLUMNS_ICON_RAYS =
  'M7 1v1M7 12v1M1 7h1M12 7h1M2.93 2.93l.71.71M10.36 10.36l.71.71M10.36 3.64l-.71.71M3.64 10.36l-.71.71';

export const CHECK_ICON_SIZE = 8;
export const CHECK_ICON_VIEWBOX = '0 0 8 8';
export const CHECK_ICON_PATH = 'M1.5 4L3.5 6L6.5 2';

// ── Modal close ───────────────────────────────────────────────────────────────
export const CLOSE_ICON_SIZE = 16;
export const CLOSE_ICON_VIEWBOX = '0 0 16 16';
export const CLOSE_ICON_PATH = 'M12 4L4 12M4 4l8 8';

// ── Success check circle ──────────────────────────────────────────────────────
export const CHECK_CIRCLE_ICON_SIZE = 22;
export const CHECK_CIRCLE_ICON_VIEWBOX = '0 0 22 22';
export const CHECK_CIRCLE_ICON_PATH = 'M5 11l4.5 4.5L17 6';
export const CHECK_CIRCLE_ICON_STROKE = tokens.success;
export const CHECK_CIRCLE_ICON_STROKE_WIDTH = 2;

// ── Empty state ───────────────────────────────────────────────────────────────
export const EMPTY_STATE_ICON_SIZE = 40;
export const EMPTY_STATE_ICON_VIEWBOX = '0 0 40 40';
export const EMPTY_STATE_ICON_CIRCLE = { cx: 20, cy: 20, r: 18 };
export const EMPTY_STATE_ICON_PATH = 'M14 20h12M20 14v12';
