import { format } from 'date-fns';
import type { SecurityEvent } from '../../data/types';
import type { ColumnDef } from '../../components/data-grid/types/DataGrid.types';
import { SeverityBadge, TypeBadge, StatusBadge } from '../../components/ui/Badge';
import { TIMESTAMP_DATE_FORMAT } from '../App.constants';
import { idCellClass, locationCellClass, timestampCellClass } from '../App.styles';

export const APP_COLUMNS: ColumnDef<SecurityEvent>[] = [
  {
    accessor: 'id',
    label: 'ID',
    sortable: true,
    render: (v) => (
      <span className={idCellClass}>{String(v)}</span>
    ),
  },
  {
    accessor: 'title',
    label: 'Title',
    sortable: true,
    filterable: true,
  },
  {
    accessor: 'type',
    label: 'Type',
    sortable: true,
    filterable: true,
    render: (v) => <TypeBadge type={v as SecurityEvent['type']} />,
  },
  {
    accessor: 'severity',
    label: 'Severity',
    sortable: true,
    filterable: true,
    render: (v) => <SeverityBadge severity={v as SecurityEvent['severity']} />,
  },
  {
    accessor: 'status',
    label: 'Status',
    sortable: true,
    filterable: true,
    render: (v) => <StatusBadge status={v as SecurityEvent['status']} />,
  },
  {
    accessor: 'location',
    label: 'Location',
    sortable: true,
    filterable: true,
    render: (v) => (
      <span className={locationCellClass}>{String(v)}</span>
    ),
  },
  {
    accessor: 'timestamp',
    label: 'Time',
    sortable: true,
    render: (v) => (
      <span className={timestampCellClass}>
        {format(v as Date, TIMESTAMP_DATE_FORMAT)}
      </span>
    ),
  },
];
