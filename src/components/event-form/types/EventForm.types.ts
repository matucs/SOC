import type React from 'react';
import type { EventType, Severity, EventStatus } from '../../../data/types';

export interface FormState {
  title: string;
  type: EventType;
  severity: Severity;
  status: EventStatus;
  location: string;
  timestamp: string;
  description: string;
}

export interface FormErrors {
  title?: string;
  timestamp?: string;
  location?: string;
}

export interface EventFormBodyProps {
  errors: FormErrors;
  defaultTimestamp: string;
  titleRef: React.RefObject<HTMLInputElement | null>;
  timestampRef: React.RefObject<HTMLInputElement | null>;
  locationRef: React.RefObject<HTMLInputElement | null>;
  onDirty: () => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  onClose: () => void;
}

export interface TitleFieldProps {
  error?: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onDirty: () => void;
}

export interface TypeAndSeverityFieldProps {
  onDirty: () => void;
}

export interface StatusFieldProps {
  onDirty: () => void;
}

export interface LocationFieldProps {
  error?: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onDirty: () => void;
}

export interface TimestampFieldProps {
  error?: string;
  defaultTimestamp: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onDirty: () => void;
}

export interface DescriptionFieldProps {
  onDirty: () => void;
}

export interface FormActionsProps {
  onClose: () => void;
}

export interface UseEventFormReturn {
  errors: FormErrors;
  isSubmitted: boolean;
  formKey: number;
  defaultTimestamp: string;
  isDirtyRef: React.RefObject<boolean>;
  markDirty: () => void;
  handleSubmit: (form: HTMLFormElement, onSuccess: (data: FormState) => void) => void;
  reset: () => void;
  titleRef: React.RefObject<HTMLInputElement | null>;
  timestampRef: React.RefObject<HTMLInputElement | null>;
  locationRef: React.RefObject<HTMLInputElement | null>;
}
