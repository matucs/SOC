import React from 'react';
import type { DataGridTableSkeletonProps } from '../types/DataGrid.types';
import { SKELETON_ROW_COUNT } from '../constants/DataGridTable.constants';
import {
  skeletonCellClass,
  skeletonCellStyle,
  skeletonBarClass,
  getSkeletonBarStyle,
} from '../styles/DataGridTable.styles';

const SkeletonRow: React.FC<DataGridTableSkeletonProps> = ({ cols }) => (
  <tr>
    {Array.from({ length: cols }, (_, i) => (
      <td key={i} className={skeletonCellClass} style={skeletonCellStyle}>
        <div className={skeletonBarClass} style={getSkeletonBarStyle(i)} />
      </td>
    ))}
  </tr>
);

export const DataGridTableSkeleton: React.FC<DataGridTableSkeletonProps> = ({ cols }) => (
  <>
    {Array.from({ length: SKELETON_ROW_COUNT }, (_, i) => (
      <SkeletonRow key={i} cols={cols} />
    ))}
  </>
);
