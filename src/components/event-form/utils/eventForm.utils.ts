import type { SecurityEvent, EventType, Severity, EventStatus } from '../../../data/types';
import { DEFAULT_DESCRIPTION } from '../strings/EventForm.strings';
import {
  formatDateLocal,
  formatTimeLocal,
  combineDateTimeLocal,
} from '../../ui/DateTimeInput/datetimeInput.utils';
import type { FormState } from '../types/EventForm.types';

export function eventToFormState(event: SecurityEvent): FormState {
  return {
    title: event.title,
    type: event.type,
    severity: event.severity,
    status: event.status,
    location: event.location,
    timestamp: combineDateTimeLocal(
      formatDateLocal(event.timestamp),
      formatTimeLocal(event.timestamp),
    ),
    description: event.description,
  };
}

export function formStateToEventPayload(
  data: FormState,
): Omit<SecurityEvent, 'id'> {
  return {
    title: data.title.trim(),
    type: data.type,
    severity: data.severity,
    status: data.status,
    location: data.location,
    timestamp: new Date(data.timestamp),
    description: data.description.trim() || DEFAULT_DESCRIPTION,
  };
}

export function parseFormData(form: HTMLFormElement): FormState {
  const fd = new FormData(form);

  return {
    title: String(fd.get('title') ?? ''),
    type: (String(fd.get('type') ?? 'access') as EventType),
    severity: (String(fd.get('severity') ?? 'low') as Severity),
    status: (String(fd.get('status') ?? 'open') as EventStatus),
    location: String(fd.get('location') ?? ''),
    timestamp: String(fd.get('timestamp') ?? ''),
    description: String(fd.get('description') ?? ''),
  };
}
