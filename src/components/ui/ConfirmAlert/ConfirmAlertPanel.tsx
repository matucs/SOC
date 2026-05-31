import { memo } from 'react';
import type { ConfirmAlertPanelProps } from './ConfirmAlertPanel.types';
import { confirmAlertPanelA11yProps } from './ConfirmAlertPanel.constants';
import { ConfirmAlertPanelContent } from './ConfirmAlertPanelContent';
import { ConfirmAlertPanelActions } from './ConfirmAlertPanelActions';
import { panelBaseClass, panelStyle } from './ConfirmAlertPanel.styles';

export const ConfirmAlertPanel = memo(function ConfirmAlertPanel({
  titleId,
  title,
  message,
  cancelLabel,
  confirmLabel,
  cancelButtonRef,
  onCancel,
  onConfirm,
  className = panelBaseClass,
  style = panelStyle,
  onPanelClick,
}: ConfirmAlertPanelProps) {
  return (
    <div
      {...confirmAlertPanelA11yProps(titleId)}
      className={className}
      style={style}
      onClick={onPanelClick}
    >
      <ConfirmAlertPanelContent titleId={titleId} title={title} message={message} />
      <ConfirmAlertPanelActions
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        cancelButtonRef={cancelButtonRef}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </div>
  );
});
