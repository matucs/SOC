import { tokens, panelShadowDanger } from '../../../theme/tokens';

export const panelBaseClass =
  'relative w-full max-w-md rounded-lg border flex flex-col contain-layout';

export const bodyClass = 'px-6 py-5';

export const iconRowClass = 'flex gap-4';

export const contentClass = 'flex-1 min-w-0';

export const titleClass = 'text-base font-semibold text-slate-100 tracking-wide';

export const messageClass = 'mt-2 text-sm text-slate-400 leading-relaxed';

export const actionsClass = 'flex flex-col-reverse sm:flex-row sm:justify-end gap-2 px-6 pb-5';

export const panelStyle = {
  background: tokens.bgSurface,
  borderColor: tokens.border,
  boxShadow: panelShadowDanger,
};

