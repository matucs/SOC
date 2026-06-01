import { memo, type KeyboardEvent } from 'react';
import type { DataGridTableRowProps } from '../../types/DataGrid.types';
import {
  getRowActivateAriaLabel,
  isRowActivateKey,
  renderDataGridCell,
} from '../../utils/dataGridTableBody.utils';
import {
  bodyRowClass,
  bodyRowInteractiveClass,
  bodyRowStyle,
  bodyCellClass,
} from '../../styles/DataGridTable.styles';

export const DataGridTableRow = memo(function DataGridTableRow<T extends object>({
  row,
  visibleColumns,
  onActivate,
  getAriaLabel,
}: DataGridTableRowProps<T>) {
  const interactive = !!onActivate;

  const handleKeyDown = (e: KeyboardEvent<HTMLTableRowElement>) => {
    if (!onActivate || !isRowActivateKey(e.key)) return;
    e.preventDefault();
    onActivate(row);
  };

  return (
    <tr
      className={interactive ? bodyRowInteractiveClass : bodyRowClass}
      style={bodyRowStyle}
      onClick={interactive ? () => onActivate(row) : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'button' : undefined}
      aria-label={
        interactive ? getRowActivateAriaLabel(row, getAriaLabel) : undefined
      }
    >
      {visibleColumns.map((col) => (
        <td key={String(col.accessor)} className={bodyCellClass}>
          {renderDataGridCell(col, row)}
        </td>
      ))}
    </tr>
  );
}) as <T extends object>(props: DataGridTableRowProps<T>) => React.JSX.Element;
