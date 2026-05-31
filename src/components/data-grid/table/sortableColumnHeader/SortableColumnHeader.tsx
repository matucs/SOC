import type { SortableColumnHeaderProps } from '../../types/DataGrid.types';
import { SortButton } from './SortButton';
import { NonSortableLabel } from './NonSortableLabel';
import { columnHeaderClass, columnHeaderStyle } from '../../styles/SortableColumnHeader.styles';

export function SortableColumnHeader<T>({
  label,
  accessor,
  sortable,
  isSorted,
  direction,
  onSort,
}: SortableColumnHeaderProps<T>) {
  return (
    <th className={columnHeaderClass} style={columnHeaderStyle}>
      {sortable ? (
        <SortButton
          label={label}
          isSorted={isSorted}
          direction={direction}
          onClick={() => onSort(accessor)}
        />
      ) : (
        <NonSortableLabel label={label} />
      )}
    </th>
  );
}
