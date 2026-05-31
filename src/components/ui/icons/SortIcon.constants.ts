export type SortIconDirection = 'asc' | 'desc';

export interface SortIconProps {
  isSorted: boolean;
  direction?: SortIconDirection;
}

export const SORT_ICON_ASC = '▲';
export const SORT_ICON_DESC = '▼';

export function getSortIconGlyph(isSorted: boolean, direction?: SortIconDirection): string {
  if (isSorted && direction === 'desc') return SORT_ICON_DESC;
  return SORT_ICON_ASC;
}
