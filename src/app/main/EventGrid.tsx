import { memo } from 'react';
import type { SecurityEvent } from '../../data/types';
import { useEventStore } from '../../store/useEventStore';
import { DataGrid, DataGridStatus } from '../../components/data-grid';
import { APP_COLUMNS } from '../columns';

export const EventGrid = memo(function EventGrid() {
  const events = useEventStore((s) => s.gridEvents);

  return (
    <DataGrid<SecurityEvent>
      data={events}
      columns={APP_COLUMNS}
      status={DataGridStatus.Idle}
    />
  );
});
