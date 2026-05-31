import type { SortButtonProps } from '../../types/DataGrid.types';
import { SortIcon } from '../../../ui/icons';
import { sortButtonClass } from '../../styles/SortableColumnHeader.styles';
import { getAriaSort } from '../../utils/dataGridTable.utils';

export const SortButton = ({ label, isSorted, direction, onClick }: SortButtonProps) => (
  <button
    onClick={onClick}
    className={sortButtonClass}
    aria-sort={getAriaSort(isSorted, direction)}
  >
    {label}
    <SortIcon isSorted={isSorted} direction={direction} />
  </button>
);
