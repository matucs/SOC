import type { DataGridTableBodyProps } from '../types/DataGrid.types';
import { bodyRowClass, bodyRowStyle, bodyCellClass } from '../styles/DataGridTable.styles';

export function DataGridTableBody<T extends object>({
  visibleColumns,
  paginatedData,
}: DataGridTableBodyProps<T>) {
  return (
    <>
      {paginatedData.map((row, ri) => (
        <tr
          key={String((row as { id?: string | number }).id ?? ri)}
          className={bodyRowClass}
          style={bodyRowStyle}
        >
          {visibleColumns.map((col) => (
            <td key={String(col.accessor)} className={bodyCellClass}>
              {col.render
                ? col.render(row[col.accessor], row)
                : String(row[col.accessor] ?? '')}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
