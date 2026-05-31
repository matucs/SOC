import { memo } from 'react';
import type { ConfirmAlertPanelContentProps } from './ConfirmAlertPanel.types';
import { confirmAlertMessageId } from './ConfirmAlertPanel.constants';
import { ConfirmAlertIcon } from '../icons';
import {
  bodyClass,
  iconRowClass,
  contentClass,
  titleClass,
  messageClass,
} from './ConfirmAlertPanel.styles';

export const ConfirmAlertPanelContent = memo(function ConfirmAlertPanelContent({
  titleId,
  title,
  message,
}: ConfirmAlertPanelContentProps) {
  const messageId = confirmAlertMessageId(titleId);

  return (
    <div className={bodyClass}>
      <div className={iconRowClass}>
        <ConfirmAlertIcon />
        <div className={contentClass}>
          <h2 id={titleId} className={titleClass}>
            {title}
          </h2>
          <p id={messageId} className={messageClass}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
});
