import { memo } from 'react';
import type { FormActionsProps } from '../types/EventForm.types';
import { Button } from '../../ui/Button';
import { BTN_CANCEL, BTN_SUBMIT } from '../strings/EventFormBody.strings';
import { formActionsClass, formActionsStyle } from '../styles/EventFormBody.styles';
import { BUTTON_VARIANT_GHOST, BUTTON_VARIANT_PRIMARY } from '../../ui/Button/Button.constants';

export const FormActions = memo(function FormActions({ onClose }: FormActionsProps) {
  return (
    <div className={formActionsClass} style={formActionsStyle}>
      <Button type="button" variant={BUTTON_VARIANT_GHOST} onClick={onClose}>
        {BTN_CANCEL}
      </Button>
      <Button type="submit" variant={BUTTON_VARIANT_PRIMARY}>
        {BTN_SUBMIT}
      </Button>
    </div>
  );
});
