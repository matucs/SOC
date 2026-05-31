import { forwardRef } from 'react';
import { useImperativeOverlay } from '../../../hooks/useImperativeOverlay';
import { ConfirmAlertPanel } from '../ConfirmAlert';
import type { InlineConfirmPromptHandle, InlineConfirmPromptProps } from './InlineConfirmPrompt.types';
import { layerClass, panelClass, layerStyle, panelStyle } from './InlineConfirmPrompt.styles';

export const InlineConfirmPrompt = forwardRef<
  InlineConfirmPromptHandle,
  InlineConfirmPromptProps
>(function InlineConfirmPrompt(
  {
    titleId,
    title,
    message,
    cancelLabel,
    confirmLabel,
    inertTargetRef,
    dismissBlockedRef,
    onCancel,
    onConfirm,
  },
  ref,
) {
  const { layerRef, focusTargetRef, handleLayerClick, handlePanelClick } = useImperativeOverlay(
    ref,
    {
      inertTargetRef,
      dismissBlockedRef,
      onDismiss: onCancel,
    },
  );

  return (
    <div
      ref={layerRef}
      hidden
      aria-hidden="true"
      className={layerClass}
      style={layerStyle}
      onClick={handleLayerClick}
    >
      <ConfirmAlertPanel
        titleId={titleId}
        title={title}
        message={message}
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        cancelButtonRef={focusTargetRef}
        onCancel={onCancel}
        onConfirm={onConfirm}
        className={panelClass}
        style={panelStyle}
        onPanelClick={handlePanelClick}
      />
    </div>
  );
});
