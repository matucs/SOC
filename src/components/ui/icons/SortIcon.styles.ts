export const sortIconBaseClass = 'text-[10px] transition-opacity';
export const sortIconActiveClass = 'opacity-100';
export const sortIconIdleClass = 'opacity-30';

export const getSortIconClass = (isSorted: boolean) =>
  `${sortIconBaseClass} ${isSorted ? sortIconActiveClass : sortIconIdleClass}`;
