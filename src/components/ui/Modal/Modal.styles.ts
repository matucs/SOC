import { tokens, panelShadow } from '../../../theme/tokens';

export const overlayClass =
  'fixed inset-0 z-50 flex items-end sm:items-center justify-center px-3 pb-0 sm:p-4';

export const dialogClass =
  'modal-enter relative w-full max-w-md sm:max-w-lg rounded-t-xl sm:rounded-lg border max-h-[92dvh] sm:max-h-[calc(100dvh-2rem)] flex flex-col overscroll-contain pb-[env(safe-area-inset-bottom)]';

export const sheetHandleClass =
  'mx-auto mt-2.5 h-1 w-10 shrink-0 rounded-full bg-slate-600/80 sm:hidden';

export const headerClass =
  'flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 border-b shrink-0';

export const titleClass =
  'min-w-0 flex-1 text-base font-semibold text-slate-100 tracking-wide truncate';

export const bodyClass =
  'flex flex-1 min-h-0 flex-col overflow-hidden';

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
