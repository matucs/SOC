import { useState, useRef, useCallback } from 'react';
import type { FormState, FormErrors, UseEventFormReturn } from '../types/EventForm.types';
import { nowDateTimeLocal } from '../../ui/DateTimeInput/datetimeInput.utils';
import { validate } from '../utils/eventForm.validate';
import { parseFormData } from '../utils/eventForm.utils';

export function useEventForm(initialValues?: FormState): UseEventFormReturn {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [defaultTimestamp, setDefaultTimestamp] = useState(() =>
    initialValues?.timestamp || nowDateTimeLocal(),
  );
  const isDirtyRef = useRef(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const timestampRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLSelectElement>(null);

  const markDirty = useCallback(() => {
    isDirtyRef.current = true;
  }, []);

  const reset = useCallback(() => {
    isDirtyRef.current = false;
    setErrors({});
    setIsSubmitted(false);
    setDefaultTimestamp(nowDateTimeLocal());
    setFormKey((key) => key + 1);
  }, []);

  const handleSubmit = useCallback((form: HTMLFormElement, onSuccess: (data: FormState) => void) => {
    const values = parseFormData(form);
    const nextErrors = validate(values);
    const hasErrors = Object.keys(nextErrors).length > 0;

    if (hasErrors) {
      setErrors(nextErrors);
      if (nextErrors.title) {
        titleRef.current?.focus({ preventScroll: true });
      } else if (nextErrors.timestamp) {
        timestampRef.current?.focus({ preventScroll: true });
      } else if (nextErrors.location) {
        locationRef.current?.focus({ preventScroll: true });
      }
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    onSuccess(values);
  }, []);

  return {
    errors,
    isSubmitted,
    formKey,
    defaultTimestamp,
    isDirtyRef,
    markDirty,
    handleSubmit,
    reset,
    titleRef,
    timestampRef,
    locationRef,
  };
}
