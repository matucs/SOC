import type { EventCountProps } from '../../types/DataGrid.types';
import { EventCountLoading } from './EventCountLoading';
import { EventCountSummary } from './EventCountSummary';
import { eventCountClass } from '../../styles/EventCount.styles';

export const EventCount = ({ totalFiltered, totalAll, isLoading }: EventCountProps) => (
  <span className={eventCountClass}>
    {isLoading ? (
      <EventCountLoading />
    ) : (
      <EventCountSummary totalFiltered={totalFiltered} totalAll={totalAll} />
    )}
  </span>
);
