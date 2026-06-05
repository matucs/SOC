import type { TimelineItemCardProps } from '../types/Timeline.types';
import { TypeBadge, SeverityBadge } from '../../ui/Badge';
import { itemAriaLabel, LOCATION_PREFIX } from '../strings/TimelineItem.strings';
import { getInitialTabIndex } from '../utils/timelineGroup.utils';
import {
  itemCardClass,
  itemCardStyle,
  itemHeaderRowClass,
  itemTitleClass,
  itemTimeClass,
  itemTagsRowClass,
  itemLocationClass,
} from '../styles/TimelineItem.styles';

export const TimelineItemCard = ({
  event,
  relativeTime,
  groupIndex,
  itemIndex,
  registerNode,
  onKeyDown,
}: TimelineItemCardProps) => (
  <div
    ref={(el) => registerNode(groupIndex, itemIndex, el)}
    role="article"
    tabIndex={getInitialTabIndex(groupIndex, itemIndex)}
    onKeyDown={onKeyDown}
    aria-label={itemAriaLabel(event.title, event.severity, event.location, relativeTime)}
    className={itemCardClass}
    style={itemCardStyle}
  >
    <div className={itemHeaderRowClass}>
      <p className={itemTitleClass}>{event.title}</p>
      <span className={itemTimeClass}>{relativeTime}</span>
    </div>

    <div className={itemTagsRowClass}>
      <TypeBadge type={event.type} />
      <SeverityBadge severity={event.severity} />
      <span className={itemLocationClass}>
        {LOCATION_PREFIX} {event.location}
      </span>
    </div>
  </div>
);
