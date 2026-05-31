import { useCallback, useEffect, useId, useRef } from 'react';
import { useStableHandler } from '../../../hooks/useStableHandler';
import type { UseDateTimeInputOptions, UseDateTimeInputResult } from './DateTimeInput.types';
import {
  assignInputRef,
  combineDateTimeLocal,
  splitDateTimeLocal,
  syncDateTimeHiddenValue,
} from './datetimeInput.utils';
import { getFieldStyle } from './DateTimeInput.styles';

export function useDateTimeInput({
  defaultValue,
  inputRef,
  style,
  ariaInvalid,
  onDirty,
}: UseDateTimeInputOptions): UseDateTimeInputResult {
  const { date: defaultDate, time: defaultTime } = splitDateTimeLocal(defaultValue);
  const hiddenDefault = combineDateTimeLocal(defaultDate, defaultTime);
  const timeId = useId();
  const hiddenRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const onDirtyRef = useStableHandler(onDirty ?? (() => {}));

  const syncHiddenValue = useCallback(() => {
    syncDateTimeHiddenValue(hiddenRef.current, dateRef.current, timeRef.current);
  }, []);

  const handleChange = useCallback(() => {
    syncHiddenValue();
    onDirtyRef.current?.();
  }, [syncHiddenValue, onDirtyRef]);

  useEffect(() => {
    syncHiddenValue();
  }, [syncHiddenValue]);

  const setTimeRef = useCallback(
    (element: HTMLInputElement | null) => {
      timeRef.current = element;
      if (element) syncHiddenValue();
    },
    [syncHiddenValue],
  );

  const setDateRef = useCallback(
    (element: HTMLInputElement | null) => {
      dateRef.current = element;
      assignInputRef(inputRef, element);
      if (element) syncHiddenValue();
    },
    [inputRef, syncHiddenValue],
  );

  const fieldStyle = { ...getFieldStyle(!!ariaInvalid), ...style };

  return {
    hiddenDefault,
    defaultDate,
    defaultTime,
    timeId,
    hiddenRef,
    setDateRef,
    setTimeRef,
    handleChange,
    fieldStyle,
  };
}
