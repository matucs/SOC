import { memo, useCallback } from 'react';
import { useUiStore } from '../../store/useUiStore';
import { Button } from '../../components/ui/Button';
import { PlusIcon } from '../../components/ui/icons';
import { NEW_EVENT_BUTTON_SIZE, NEW_EVENT_BUTTON_VARIANT } from './AppHeader.constants';
import { BTN_NEW_EVENT, ARIA_ADD_EVENT } from './AppHeader.strings';
import { newEventButtonClass, newEventLabelClass } from './AppHeader.styles';

export const AppHeaderNewEventButton = memo(function AppHeaderNewEventButton() {
  const handleClick = useCallback(() => {
    useUiStore.getState().openEventForm();
  }, []);

  return (
    <Button
      variant={NEW_EVENT_BUTTON_VARIANT}
      size={NEW_EVENT_BUTTON_SIZE}
      className={newEventButtonClass}
      onClick={handleClick}
      aria-label={ARIA_ADD_EVENT}
    >
      <PlusIcon />
      <span className={newEventLabelClass}>{BTN_NEW_EVENT}</span>
    </Button>
  );
});
