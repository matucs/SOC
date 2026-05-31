import type { SortIconProps } from './SortIcon.constants';
import { getSortIconGlyph } from './SortIcon.constants';
import { getSortIconClass } from './SortIcon.styles';

export const SortIcon = ({ isSorted, direction }: SortIconProps) => (
  <span className={getSortIconClass(isSorted)} aria-hidden="true">
    {getSortIconGlyph(isSorted, direction)}
  </span>
);

export type { SortIconProps, SortIconDirection } from './SortIcon.constants';
