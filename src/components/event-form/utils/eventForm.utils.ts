import type { EventType, Severity, EventStatus } from '../../../data/types';
import type { FormState } from '../types/EventForm.types';

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
