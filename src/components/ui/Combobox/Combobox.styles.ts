import { tokens, dropdownShadow } from '../../../theme/tokens';

export const wrapperClass = 'relative group';

export const listClass =
  'absolute z-20 mt-1 w-full max-h-48 overflow-y-auto rounded border py-1 hidden group-focus-within:block shadow-lg fade-in';

export const optionClass =
  'px-3 py-2 text-sm font-mono text-slate-200 cursor-pointer transition-colors hover:bg-cyan-500/10 hover:text-cyan-300';

export const emptyClass = 'px-3 py-2 text-sm text-slate-500 italic';

export const listStyle = {
  background: tokens.bgElevated,
  borderColor: tokens.border,
  boxShadow: dropdownShadow,
};
