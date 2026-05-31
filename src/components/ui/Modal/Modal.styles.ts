import { tokens, panelShadow } from '../../../theme/tokens';

export const overlayClass =
  'fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 isolate';

export const dialogClass =
  'modal-enter relative w-full max-w-lg rounded-t-xl sm:rounded-lg border max-h-[92dvh] sm:max-h-[calc(100dvh-2rem)] flex flex-col contain-layout';

export const headerClass =
  'flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b shrink-0';

export const titleClass =
  'text-base font-semibold text-slate-100 tracking-wide';

export const bodyClass = 'px-4 py-4 sm:px-6 sm:py-5 overflow-y-auto flex-1 min-h-0';

export const overlayStyle = {
  backgroundColor: tokens.scrimHeavy,
};

export const dialogStyle = {
  background: tokens.bgSurface,
  borderColor: tokens.border,
  boxShadow: panelShadow,
};

export const headerStyle = {
  borderColor: tokens.border,
};
