import type { CSSProperties, RefObject } from 'react';
import type { EventValueAccent } from '../../../theme/eventValueTheme';

export interface FormSelectOption<T extends string> {
  value: T;
  label: string;
}

export interface FormSelectProps<T extends string> {
  id: string;
  name: string;
  defaultValue: T;
  options: readonly FormSelectOption<T>[];
  getAccent: (value: T) => EventValueAccent;
  onDirty?: () => void;
  inputRef?: RefObject<HTMLSelectElement | null>;
  hasError?: boolean;
  placeholder?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}

export type FormSelectAccentStyle = CSSProperties;
