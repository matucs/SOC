import {
  HEADER_BG,
  HEADER_BORDER_COLOR,
  HEADER_SHADOW,
} from './AppHeader.constants';

export const headerClass = 'flex flex-col shrink-0 border-b';
export const headerRowClass =
  'flex items-center justify-between gap-2 px-3 py-2.5 sm:px-5 sm:py-3 w-full min-w-0';
export const headerMobileMetaClass =
  'flex md:hidden items-center justify-between gap-3 px-3 py-2 border-t w-full';
export const headerLeftClass = 'flex items-center gap-2 sm:gap-3 min-w-0';
export const headerCenterClass = 'hidden md:flex items-center gap-4';
export const headerRightClass = 'flex items-center gap-2 shrink-0';
export const titleWrapClass = 'min-w-0';
export const appTitleClass = 'text-sm font-semibold text-slate-100 tracking-wide truncate';
export const appSubtitleClass =
  'hidden sm:block text-[10px] text-slate-600 font-mono tracking-widest uppercase';
export const liveStatusClass = 'flex items-center gap-2';
export const liveLabelClass =
  'text-[10px] text-slate-500 font-mono uppercase tracking-wider live-label-blink';
export const headerDividerClass = 'w-px h-4';
export const newEventLabelClass = 'hidden sm:inline';
export const newEventButtonClass = 'shrink-0 px-2.5 sm:px-3';

export const headerStyle = {
  background: HEADER_BG,
  borderColor: HEADER_BORDER_COLOR,
  boxShadow: HEADER_SHADOW,
};

export const headerDividerStyle = { background: HEADER_BORDER_COLOR };
export const headerMobileMetaStyle = { borderColor: HEADER_BORDER_COLOR };
