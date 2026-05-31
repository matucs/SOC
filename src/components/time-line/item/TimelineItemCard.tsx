import React from 'react';
import type { TimelineItemCardProps } from '../types/Timeline.types';
import { TypeBadge, SeverityBadge } from '../../ui/Badge';
import { useFocusWhen } from '../../../hooks/useFocusWhen';
import { itemAriaLabel, LOCATION_PREFIX } from '../strings/TimelineItem.strings';
import {
  getItemCardClass,
  itemCardStyle,
  itemHeaderRowClass,
  itemTitleClass,
  itemTimeClass,
  itemTagsRowClass,
  itemLocationClass,
} from '../styles/TimelineItem.styles';

export const TimelineItemCard: React.FC<TimelineItemCardProps> = ({
  event,
  relativeTime,
  isFocused,
  onFocus,
  onKeyDown,
}) => {
  const cardRef = useFocusWhen<HTMLDivElement>(isFocused);

  return (
    <div
      ref={cardRef}
      role="article"
      tabIndex={isFocused ? 0 : -1}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      aria-label={itemAriaLabel(event.title, event.severity, event.location, relativeTime)}
      className={getItemCardClass(isFocused)}
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
};
