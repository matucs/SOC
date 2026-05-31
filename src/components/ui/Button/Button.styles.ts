import type { ButtonProps } from './Button.types';

export const buttonBaseClass =
  'inline-flex items-center gap-2 rounded font-medium transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed';

export const spinnerClass =
  'inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin';

export const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400/60 active:bg-cyan-500/40',
  secondary:
    'bg-slate-800/60 border border-slate-600/40 text-slate-300 hover:bg-slate-700/60 hover:border-slate-500/60',
  ghost:
    'bg-transparent border border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-slate-300',
  danger:
    'bg-red-950/60 border border-red-500/40 text-red-400 hover:bg-red-900/60 hover:border-red-400/60',
};

export const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
};
