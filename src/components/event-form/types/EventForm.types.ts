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
  initialValues: FormState;
  errors: FormErrors;
  defaultTimestamp: string;
  titleRef: React.RefObject<HTMLInputElement | null>;
  timestampRef: React.RefObject<HTMLInputElement | null>;
  locationRef: React.RefObject<HTMLSelectElement | null>;
  onDirty: () => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  onClose: () => void;
  submitLabel: string;
}

export interface TitleFieldProps {
  defaultValue: string;
  error?: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onDirty: () => void;
}

export interface TypeAndSeverityFieldProps {
  defaultType: FormState['type'];
  defaultSeverity: FormState['severity'];
  onDirty: () => void;
}

export interface StatusFieldProps {
  defaultStatus: FormState['status'];
  onDirty: () => void;
}

export interface LocationFieldProps {
  defaultValue: string;
  error?: string;
  inputRef: React.RefObject<HTMLSelectElement | null>;
  onDirty: () => void;
}

export interface TimestampFieldProps {
  error?: string;
  defaultTimestamp: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onDirty: () => void;
}

export interface DescriptionFieldProps {
  defaultValue: string;
  onDirty: () => void;
}

export interface FormActionsProps {
  onClose: () => void;
  submitLabel: string;
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
  locationRef: React.RefObject<HTMLSelectElement | null>;
}
