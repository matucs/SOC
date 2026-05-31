import type { SortConfig } from '../types/DataGrid.types';
import { SortDirection } from '../constants/DataGrid.constants';

export function applyFilters<T extends object>(
  data: T[],
  columnFilters: Record<string, string>,
): T[] {
  const activeFilters = Object.entries(columnFilters).filter(([, v]) => v.trim() !== '');
  if (activeFilters.length === 0) return data;

  return data.filter((row) =>
    activeFilters.every(([accessor, filterValue]) =>
      String((row as Record<string, unknown>)[accessor] ?? '')
        .toLowerCase()
        .includes(filterValue.toLowerCase()),
    ),
  );
}

export function applySort<T extends object>(
  data: T[],
  sortConfig: SortConfig<T> | null,
): T[] {
  if (!sortConfig) return data;

  const { accessor, direction } = sortConfig;
  return [...data].sort((a, b) => {
    const aVal = a[accessor];
    const bVal = b[accessor];

    if (aVal instanceof Date && bVal instanceof Date) {
      return direction === SortDirection.Asc
        ? aVal.getTime() - bVal.getTime()
        : bVal.getTime() - aVal.getTime();
    }

    const aStr = String(aVal ?? '').toLowerCase();
    const bStr = String(bVal ?? '').toLowerCase();
    const cmp = aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
    return direction === SortDirection.Asc ? cmp : -cmp;
  });
}
