import React from 'react';
import { EmptyStateIcon } from '../../ui/icons';
import type { DataGridTableEmptyProps } from '../types/DataGrid.types';
import { EMPTY_HEADING, EMPTY_SUBTEXT } from '../strings/DataGridTable.strings';
import {
  emptyCellClass,
  emptyHeadingClass,
  emptySubtextClass,
  emptyIconClass,
} from '../styles/DataGridTable.styles';

export const DataGridTableEmpty: React.FC<DataGridTableEmptyProps> = ({ cols }) => (
  <tr>
    <td colSpan={cols}>
      <div className={emptyCellClass}>
        <EmptyStateIcon className={emptyIconClass} />
        <p className={emptyHeadingClass}>{EMPTY_HEADING}</p>
        <p className={emptySubtextClass}>{EMPTY_SUBTEXT}</p>
      </div>
    </td>
  </tr>
);
