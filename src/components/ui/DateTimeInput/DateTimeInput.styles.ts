import { tokens } from '../../../theme/tokens';

export const wrapperClass = 'grid grid-cols-1 sm:grid-cols-2 gap-2';

export const fieldClass =
  'form-field datetime-field w-full text-sm px-3 py-2 rounded border bg-transparent text-slate-400 focus:outline-none focus:border-cyan-500/60 transition-colors font-mono';

export const fieldStyle = {
  borderColor: tokens.border,
  background: 'rgba(255,255,255,0.02)',
};

export const errorFieldStyle = {
  borderColor: 'rgba(239,68,68,0.5)',
  background: 'rgba(239,68,68,0.04)',
};

export const getFieldStyle = (hasError: boolean) =>
  hasError ? errorFieldStyle : fieldStyle;
