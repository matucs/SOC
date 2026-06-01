import type { CSSProperties } from 'react';
import { tokens } from '../../../theme/tokens';
import { FORM_ACTIONS_BORDER, OPTION_BG } from '../constants/EventFormBody.constants';

export const formLayoutClass = 'flex flex-col flex-1 min-h-0';
export const formScrollClass =
  'flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-4 pt-4 sm:px-6 sm:pt-5';
export const formStackClass = 'space-y-4';
export const twoColumnGridClass = 'grid grid-cols-1 sm:grid-cols-2 gap-3';
export const formActionsClass =
  'flex shrink-0 flex-row items-stretch gap-3 p-4 border-t';

export const formActionButtonClass = 'min-w-0 flex-1 justify-center';

export const inputClass =
  'form-field w-full text-sm px-3 py-2 rounded border bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors font-mono';

export const inputStyle = {
  borderColor: tokens.border,
  background: 'rgba(255,255,255,0.02)',
};

export const errorInputStyle = {
  borderColor: 'rgba(239,68,68,0.5)',
  background: 'rgba(239,68,68,0.04)',
};

export const selectInputStyle = { ...inputStyle, cursor: 'pointer' };
export const textareaStyle = { ...inputStyle, resize: 'none' as const };
export const optionStyle = { background: OPTION_BG };
export const formActionsStyle = { borderColor: FORM_ACTIONS_BORDER };

export const getInputStyle = (hasError: boolean) =>
  hasError ? errorInputStyle : inputStyle;

export const getGridMutedFieldStyle = (hasError: boolean): CSSProperties =>
  hasError ? errorInputStyle : { ...inputStyle, color: '#94a3b8' };
