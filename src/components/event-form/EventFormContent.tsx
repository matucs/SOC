import { memo } from 'react';
import { Modal } from '../ui/Modal';
import { InlineConfirmPrompt } from '../ui/InlineConfirmPrompt';
import { EventFormSuccess } from './success';
import { EventFormBody } from './body';
import { useEventFormContent } from './hooks/useEventFormContent';
import { formShellClass, formShellInnerClass } from './styles/EventFormContent.styles';

export const EventFormContent = memo(function EventFormContent() {
  const {
    modal,
    dismissBlockedRef,
    formShellRef,
    isSubmitted,
    isEditMode,
    formInstanceKey,
    bodyProps,
    discardPrompt,
  } = useEventFormContent();

  return (
    <Modal isOpen {...modal} dismissBlockedRef={dismissBlockedRef}>
      <div className={formShellClass}>
        <div ref={formShellRef} className={formShellInnerClass}>
          {isSubmitted ? (
            <EventFormSuccess isEdit={isEditMode} />
          ) : (
            <EventFormBody key={formInstanceKey} {...bodyProps} />
          )}
        </div>

        <InlineConfirmPrompt {...discardPrompt} />
      </div>
    </Modal>
  );
});
