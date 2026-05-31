export const PAGE_SIZE_OPTIONS = [10, 25, 50] as const;
export type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];

export const DataGridStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Empty: 'empty',
} as const;

export type DataGridStatus = (typeof DataGridStatus)[keyof typeof DataGridStatus];

export const DEFAULT_STATUS = DataGridStatus.Idle;

export const SortDirection = {
  Asc: 'asc',
  Desc: 'desc',
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];
