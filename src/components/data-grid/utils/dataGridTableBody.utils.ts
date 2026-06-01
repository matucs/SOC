import type { ReactNode } from 'react';
import type { ColumnDef } from '../types/DataGrid.types';
import { ROW_ACTIVATE_KEYS } from '../constants/DataGridTableRow.constants';
import { ROW_ACTIVATE_ARIA_DEFAULT } from '../strings/DataGridTable.strings';

export function getDataGridRowKey<T extends object>(row: T, index: number): string {
  const id = (row as { id?: string | number }).id;
  return id != null ? String(id) : String(index);
}

export function isRowActivateKey(key: string): boolean {
  return (ROW_ACTIVATE_KEYS as readonly string[]).includes(key);
}

export function getRowActivateAriaLabel<T extends object>(
  row: T,
  getAriaLabel?: (row: T) => string,
): string {
  return getAriaLabel?.(row) ?? ROW_ACTIVATE_ARIA_DEFAULT;
}

export function renderDataGridCell<T extends object>(
  column: ColumnDef<T>,
  row: T,
): ReactNode {
  const value = row[column.accessor];
  return column.render ? column.render(value, row) : String(value ?? '');
}
