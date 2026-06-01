import React from 'react';
import { CheckCircleIcon } from '../../ui/icons';
import {
  SUCCESS_HEADING_CREATED,
  SUCCESS_HEADING_UPDATED,
  SUCCESS_SUBTEXT,
} from '../strings/EventFormSuccess.strings';
import {
  successContainerClass,
  successIconWrapClass,
  successHeadingClass,
  successSubtextClass,
} from '../styles/EventFormSuccess.styles';

export interface EventFormSuccessProps {
  isEdit: boolean;
}

export const EventFormSuccess: React.FC<EventFormSuccessProps> = ({ isEdit }) => (
  <div role="status" aria-live="polite" className={successContainerClass}>
    <div className={successIconWrapClass}>
      <CheckCircleIcon />
    </div>
    <p className={successHeadingClass}>
      {isEdit ? SUCCESS_HEADING_UPDATED : SUCCESS_HEADING_CREATED}
    </p>
    <p className={successSubtextClass}>{SUCCESS_SUBTEXT}</p>
  </div>
);
