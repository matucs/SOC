import type { FilterColumnCellProps } from '../types/DataGrid.types';
import { FILTER_PLACEHOLDER, ariaFilterBy } from '../strings/DataGridTable.strings';
import {
  filterRowClass,
  filterRowStyle,
  filterInputClass,
  filterInputStyle,
} from '../styles/DataGridTable.styles';
import { FILTER_INPUT_TYPE, FILTER_ROW_SPACER_HEIGHT } from '../constants/DataGridTable.constants';

export function FilterColumnCell<T>({
  label,
  accessor,
  filterable,
  value,
  onFilter,
}: FilterColumnCellProps<T>) {
  return (
    <th className={filterRowClass} style={filterRowStyle}>
      {filterable ? (
        <input
          type={FILTER_INPUT_TYPE}
          placeholder={FILTER_PLACEHOLDER}
          value={value}
          onChange={(e) => onFilter(accessor, e.target.value)}
          className={filterInputClass}
          style={filterInputStyle}
          aria-label={ariaFilterBy(label)}
        />
      ) : (
        <div className={FILTER_ROW_SPACER_HEIGHT} />
      )}
    </th>
  );
}
