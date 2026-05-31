import { memo, useCallback, useEffect, useRef, type SyntheticEvent } from 'react';
import { Modal } from '../ui/Modal';
import { InlineConfirmPrompt } from '../ui/InlineConfirmPrompt';
import type { InlineConfirmPromptHandle } from '../ui/InlineConfirmPrompt';
import { useStableHandler } from '../../hooks/useStableHandler';
import { useUiStore } from '../../store/useUiStore';
import { useEventStore } from '../../store/useEventStore';
import { useEventForm } from './hooks/useEventForm';
import { EventFormSuccess } from './success';
import { EventFormBody } from './body';
import {
  MODAL_TITLE,
  DEFAULT_DESCRIPTION,
  DISCARD_TITLE,
  DISCARD_MESSAGE,
  BTN_KEEP_EDITING,
  BTN_DISCARD,
  DISCARD_PROMPT_TITLE_ID,
} from './strings/EventForm.strings';
import { formShellClass } from './styles/EventFormContent.styles';

export const EventFormContent = memo(function EventFormContent() {
  const closeEventForm = useUiStore((s) => s.closeEventForm);
  const onCloseRef = useStableHandler(closeEventForm);

  const dismissBlockedRef = useRef(false);
  const formShellRef = useRef<HTMLDivElement>(null);
  const discardPromptRef = useRef<InlineConfirmPromptHandle>(null);

  const {
    errors,
    isSubmitted,
    formKey,
    defaultTimestamp,
    isDirtyRef,
    markDirty,
    handleSubmit,
    reset,
    titleRef,
    timestampRef,
    locationRef,
  } = useEventForm();

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        reset();
        onCloseRef.current();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, reset, onCloseRef]);

  useEffect(() => () => useEventStore.getState().syncTimeline(), []);

  const finishClose = useCallback(() => {
    discardPromptRef.current?.hide();
    reset();
    onCloseRef.current();
  }, [reset, onCloseRef]);

  const handleKeepEditing = useCallback(() => {
    discardPromptRef.current?.hide();
  }, []);

  const handleClose = useCallback(() => {
    if (isDirtyRef.current && !isSubmitted) {
      discardPromptRef.current?.show();
      return;
    }
    finishClose();
  }, [finishClose, isDirtyRef, isSubmitted]);

  const handleDiscard = useCallback(() => {
    finishClose();
  }, [finishClose]);

  const onSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(e.currentTarget, (data) => {
        useEventStore.getState().addEvent(
          {
            title: data.title.trim(),
            type: data.type,
            severity: data.severity,
            status: data.status,
            location: data.location,
            timestamp: new Date(data.timestamp),
            description: data.description.trim() || DEFAULT_DESCRIPTION,
          },
          { refreshTimeline: true },
        );
      });
    },
    [handleSubmit],
  );

  return (
    <Modal
      isOpen
      onClose={handleClose}
      title={MODAL_TITLE}
      titleId="event-form-title"
      dismissBlockedRef={dismissBlockedRef}
    >
      <div className={formShellClass}>
        <div ref={formShellRef}>
          {isSubmitted ? (
            <EventFormSuccess />
          ) : (
            <EventFormBody
              key={formKey}
              errors={errors}
              defaultTimestamp={defaultTimestamp}
              titleRef={titleRef}
              timestampRef={timestampRef}
              locationRef={locationRef}
              onDirty={markDirty}
              onSubmit={onSubmit}
              onClose={handleClose}
            />
          )}
        </div>

        <InlineConfirmPrompt
          ref={discardPromptRef}
          titleId={DISCARD_PROMPT_TITLE_ID}
          title={DISCARD_TITLE}
          message={DISCARD_MESSAGE}
          cancelLabel={BTN_KEEP_EDITING}
          confirmLabel={BTN_DISCARD}
          inertTargetRef={formShellRef}
          dismissBlockedRef={dismissBlockedRef}
          onCancel={handleKeepEditing}
          onConfirm={handleDiscard}
        />
      </div>
    </Modal>
  );
});
