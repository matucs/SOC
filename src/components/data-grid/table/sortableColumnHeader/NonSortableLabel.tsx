import type { NonSortableLabelProps } from '../../types/DataGrid.types';
import { nonSortableLabelClass } from '../../styles/SortableColumnHeader.styles';

export const NonSortableLabel = ({ label }: NonSortableLabelProps) => (
  <span className={nonSortableLabelClass}>{label}</span>
);
