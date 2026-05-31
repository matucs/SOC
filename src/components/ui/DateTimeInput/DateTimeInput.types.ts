import type { CSSProperties, RefObject } from 'react';

export interface DateTimeInputProps {
  id: string;
  name: string;
  defaultValue?: string;
  maxDate?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
  style?: CSSProperties;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
  onDirty?: () => void;
}

export interface UseDateTimeInputOptions {
  defaultValue: string;
  inputRef?: RefObject<HTMLInputElement | null>;
  style?: CSSProperties;
  ariaInvalid?: boolean;
  onDirty?: () => void;
}

export interface UseDateTimeInputResult {
  hiddenDefault: string;
  defaultDate: string;
  defaultTime: string;
  timeId: string;
  hiddenRef: RefObject<HTMLInputElement | null>;
  setDateRef: (element: HTMLInputElement | null) => void;
  setTimeRef: (element: HTMLInputElement | null) => void;
  handleChange: () => void;
  fieldStyle: CSSProperties;
}

export interface DateTimeInputFieldProps {
  id: string;
  type: 'date' | 'time';
  defaultValue: string;
  max?: string;
  inputRef: (element: HTMLInputElement | null) => void;
  onInput: () => void;
  ariaInvalid?: boolean;
  ariaDescribedBy?: string;
  ariaLabel: string;
  style: CSSProperties;
}

export interface DateTimeInputHiddenProps {
  hiddenRef: RefObject<HTMLInputElement | null>;
  name: string;
  defaultValue: string;
}
