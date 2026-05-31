export const CONFIRM_ALERT_MESSAGE_ID_SUFFIX = '-message';

export const CONFIRM_ALERT_DIALOG_ROLE = 'alertdialog';

export const CONFIRM_ALERT_ARIA_MODAL = 'true';

export function confirmAlertMessageId(titleId: string): string {
  return `${titleId}${CONFIRM_ALERT_MESSAGE_ID_SUFFIX}`;
}

export function confirmAlertPanelA11yProps(titleId: string) {
  return {
    role: CONFIRM_ALERT_DIALOG_ROLE,
    'aria-modal': CONFIRM_ALERT_ARIA_MODAL,
    'aria-labelledby': titleId,
    'aria-describedby': confirmAlertMessageId(titleId),
  } as const;
}
