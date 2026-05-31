import React from 'react';
import { CheckCircleIcon } from '../../ui/icons';
import { SUCCESS_HEADING, SUCCESS_SUBTEXT } from '../strings/EventFormSuccess.strings';
import {
  successContainerClass,
  successIconWrapClass,
  successHeadingClass,
  successSubtextClass,
} from '../styles/EventFormSuccess.styles';

export const EventFormSuccess: React.FC = () => (
  <div role="status" aria-live="polite" className={successContainerClass}>
    <div className={successIconWrapClass}>
      <CheckCircleIcon />
    </div>
    <p className={successHeadingClass}>{SUCCESS_HEADING}</p>
    <p className={successSubtextClass}>{SUCCESS_SUBTEXT}</p>
  </div>
);
