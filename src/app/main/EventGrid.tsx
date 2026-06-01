import { memo, useCallback } from 'react';
import type { SecurityEvent } from '../../data/types';
import { useEventStore } from '../../store/useEventStore';
import { useUiStore } from '../../store/useUiStore';
import { DataGrid, DataGridStatus } from '../../components/data-grid';
import { APP_COLUMNS } from '../columns';

export const EventGrid = memo(function EventGrid() {
  const events = useEventStore((s) => s.gridEvents);
  const openEditEventForm = useUiStore((s) => s.openEditEventForm);

  const handleRowActivate = useCallback(
    (row: SecurityEvent) => {
      openEditEventForm(row.id);
    },
    [openEditEventForm],
  );

  const getRowAriaLabel = useCallback(
    (row: SecurityEvent) => `Edit event ${row.title}`,
    [],
  );

  return (
    <DataGrid<SecurityEvent>
      data={events}
      columns={APP_COLUMNS}
      status={DataGridStatus.Idle}
      onRowActivate={handleRowActivate}
      getRowAriaLabel={getRowAriaLabel}
    />
  );
});
