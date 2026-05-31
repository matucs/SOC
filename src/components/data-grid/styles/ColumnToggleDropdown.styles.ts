import { dropdownPanelStyle } from '../constants/ColumnToggleDropdown.constants';

export const dropdownWrapperClass = 'relative';

export const dropdownPanelClass =
  'absolute right-0 top-full mt-1 z-20 min-w-[140px] sm:min-w-[160px] rounded border py-1 fade-in max-w-[calc(100vw-2rem)]';

export { dropdownPanelStyle };

export const dropdownItemClass =
  'w-full flex items-center gap-2 px-3 py-1.5 text-xs text-left hover:bg-slate-700/40 transition-colors';

export const checkboxBaseClass =
  'w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors';

export const checkboxVisibleClass =
  'bg-cyan-500/20 border-cyan-500/60 text-cyan-400';

export const checkboxHiddenClass = 'border-slate-600 text-transparent';

export const columnLabelVisibleClass = 'text-slate-300';
export const columnLabelHiddenClass = 'text-slate-500';

export const getCheckboxClass = (isVisible: boolean) =>
  `${checkboxBaseClass} ${isVisible ? checkboxVisibleClass : checkboxHiddenClass}`;

export const getColumnLabelClass = (isVisible: boolean) =>
  isVisible ? columnLabelVisibleClass : columnLabelHiddenClass;
