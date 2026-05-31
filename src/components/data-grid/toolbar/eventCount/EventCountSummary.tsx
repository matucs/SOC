import type { EventCountSummaryProps } from '../../types/DataGrid.types';
import { COUNT_SEPARATOR } from '../../constants/EventCount.constants';
import { EVENT_COUNT_SUFFIX } from '../../strings/EventCount.strings';
import { eventCountHighlightClass } from '../../styles/EventCount.styles';

export const EventCountSummary = ({ totalFiltered, totalAll }: EventCountSummaryProps) => (
  <>
    <span className={eventCountHighlightClass}>{totalFiltered}</span>
    {' '}{COUNT_SEPARATOR} {totalAll} {EVENT_COUNT_SUFFIX}
  </>
);
