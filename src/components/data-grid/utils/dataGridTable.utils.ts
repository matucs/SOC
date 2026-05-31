import type { SortConfig, SortDirection } from '../types/DataGrid.types';
import { SortDirection as SortDir } from '../constants/DataGrid.constants';
import { ARIA_SORT_ASC, ARIA_SORT_DESC, ARIA_SORT_NONE } from '../strings/DataGridTable.strings';

export function isColumnSorted<T>(
  sortConfig: SortConfig<T> | null,
  accessor: keyof T,
): boolean {
  return sortConfig?.accessor === accessor;
}

export function getAriaSort(
  isSorted: boolean,
  direction: SortDirection | undefined,
): typeof ARIA_SORT_ASC | typeof ARIA_SORT_DESC | typeof ARIA_SORT_NONE {
  if (!isSorted) return ARIA_SORT_NONE;
  return direction === SortDir.Asc ? ARIA_SORT_ASC : ARIA_SORT_DESC;
}
