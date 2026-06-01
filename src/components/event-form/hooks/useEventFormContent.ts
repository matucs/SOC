import { useCallback, useEffect, useMemo, useRef, type SyntheticEvent } from 'react';
import { useStableHandler } from '../../../hooks/useStableHandler';
import type { InlineConfirmPromptHandle } from '../../ui/InlineConfirmPrompt';
import { useUiStore } from '../../../store/useUiStore';
import { useEventStore } from '../../../store/useEventStore';
import { DEFAULT_FORM_VALUES } from '../constants/EventForm.constants';
import {
  EVENT_FORM_SUCCESS_CLOSE_MS,
  EVENT_FORM_TITLE_ID,
} from '../constants/EventFormContent.constants';
import {
  MODAL_TITLE_NEW,
  MODAL_TITLE_EDIT,
  DISCARD_TITLE,
  DISCARD_MESSAGE,
  BTN_KEEP_EDITING,
  BTN_DISCARD,
  DISCARD_PROMPT_TITLE_ID,
} from '../strings/EventForm.strings';
import {
  BTN_SUBMIT_CREATE,
  BTN_SUBMIT_EDIT,
} from '../strings/EventFormBody.strings';
import { eventToFormState, formStateToEventPayload } from '../utils/eventForm.utils';
import { useEventForm } from './useEventForm';

export function useEventFormContent() {
  const editingEventId = useUiStore((s) => s.editingEventId);
  const closeEventForm = useUiStore((s) => s.closeEventForm);
  const onCloseRef = useStableHandler(closeEventForm);

  const editingEvent = useEventStore((s) =>
    editingEventId ? s.gridEvents.find((event) => event.id === editingEventId) : undefined,
  );

  const isEditMode = !!editingEventId && !!editingEvent;

  const initialValues = useMemo(
    () => (editingEvent ? eventToFormState(editingEvent) : DEFAULT_FORM_VALUES),
    [editingEvent],
  );

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
  } = useEventForm(isEditMode ? initialValues : undefined);

  useEffect(() => {
    if (editingEventId && !editingEvent) {
      onCloseRef.current();
    }
  }, [editingEventId, editingEvent, onCloseRef]);

  useEffect(() => {
    if (!isSubmitted) return;

    const timer = setTimeout(() => {
      reset();
      onCloseRef.current();
    }, EVENT_FORM_SUCCESS_CLOSE_MS);

    return () => clearTimeout(timer);
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
        const payload = formStateToEventPayload(data);
        const { addEvent, updateEvent } = useEventStore.getState();
        const options = { refreshTimeline: true as const };

        if (isEditMode && editingEventId) {
          updateEvent(editingEventId, payload, options);
        } else {
          addEvent(payload, options);
        }
      });
    },
    [handleSubmit, isEditMode, editingEventId],
  );

  const formInstanceKey = `${editingEventId ?? 'new'}-${formKey}`;

  return {
    modal: {
      title: isEditMode ? MODAL_TITLE_EDIT : MODAL_TITLE_NEW,
      titleId: EVENT_FORM_TITLE_ID,
      onClose: handleClose,
    },
    dismissBlockedRef,
    formShellRef,
    isSubmitted,
    isEditMode,
    formInstanceKey,
    bodyProps: {
      initialValues,
      errors,
      defaultTimestamp,
      titleRef,
      timestampRef,
      locationRef,
      onDirty: markDirty,
      onSubmit,
      onClose: handleClose,
      submitLabel: isEditMode ? BTN_SUBMIT_EDIT : BTN_SUBMIT_CREATE,
    },
    discardPrompt: {
      ref: discardPromptRef,
      titleId: DISCARD_PROMPT_TITLE_ID,
      title: DISCARD_TITLE,
      message: DISCARD_MESSAGE,
      cancelLabel: BTN_KEEP_EDITING,
      confirmLabel: BTN_DISCARD,
      inertTargetRef: formShellRef,
      dismissBlockedRef,
      onCancel: handleKeepEditing,
      onConfirm: handleDiscard,
    },
  };
}
