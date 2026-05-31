import {
  SECTION_ICON_SIZE,
  SECTION_ICON_VIEWBOX,
  SECTION_ICON_STROKE,
  SECTION_ICON_STROKE_WIDTH,
  GRID_ICON_RECT,
  GRID_ICON_PATH,
  ICON_FILL_NONE,
} from './Icons.constants';

export const GridIcon = () => (
  <svg width={SECTION_ICON_SIZE} height={SECTION_ICON_SIZE} viewBox={SECTION_ICON_VIEWBOX} fill={ICON_FILL_NONE}>
    <rect
      x={GRID_ICON_RECT.x}
      y={GRID_ICON_RECT.y}
      width={GRID_ICON_RECT.width}
      height={GRID_ICON_RECT.height}
      rx={GRID_ICON_RECT.rx}
      stroke={SECTION_ICON_STROKE}
      strokeWidth={SECTION_ICON_STROKE_WIDTH}
    />
    <path d={GRID_ICON_PATH} stroke={SECTION_ICON_STROKE} strokeWidth={SECTION_ICON_STROKE_WIDTH} />
  </svg>
);
