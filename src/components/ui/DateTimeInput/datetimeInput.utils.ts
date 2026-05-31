import type { RefObject } from 'react';
import {
  DATETIME_LOCAL_SEPARATOR,
  TIME_VALUE_LENGTH,
} from './DateTimeInput.constants';

function pad2(value: number): string {
  return String(value).padStart(2, '0');
}

export function assignInputRef(
  ref: RefObject<HTMLInputElement | null> | undefined,
  element: HTMLInputElement | null,
): void {
  if (ref) ref.current = element;
}

export function syncDateTimeHiddenValue(
  hidden: HTMLInputElement | null,
  date: HTMLInputElement | null,
  time: HTMLInputElement | null,
): void {
  if (!hidden || !date || !time) return;
  hidden.value = combineDateTimeLocal(date.value, time.value);
}

export function formatDateLocal(date: Date): string {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

export function formatTimeLocal(date: Date): string {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

export function nowDateTimeLocal(): string {
  const now = new Date();
  return `${formatDateLocal(now)}${DATETIME_LOCAL_SEPARATOR}${formatTimeLocal(now)}`;
}

export function splitDateTimeLocal(value: string): { date: string; time: string } {
  if (!value) return { date: '', time: '' };
  const [date, time = ''] = value.split(DATETIME_LOCAL_SEPARATOR);
  return { date, time: time.slice(0, TIME_VALUE_LENGTH) };
}

export function combineDateTimeLocal(date: string, time: string): string {
  if (!date || !time) return '';
  return `${date}${DATETIME_LOCAL_SEPARATOR}${time}`;
}

export function todayDateLocal(): string {
  return formatDateLocal(new Date());
}
