import type { EventType, Severity, EventStatus } from '../../../data/types';
import { formatTypeOptionLabel } from '../../../data/eventMetadata';
import type { FormState } from '../types/EventForm.types';

export const DEFAULT_FORM_VALUES: FormState = {
  title: '',
  type: 'access',
  severity: 'low',
  status: 'open',
  location: '',
  timestamp: '',
  description: '',
};

const EVENT_TYPE_VALUES: EventType[] = ['access', 'camera', 'alarm', 'system'];

export const EVENT_TYPES = EVENT_TYPE_VALUES.map((value) => ({
  value,
  label: formatTypeOptionLabel(value),
}));

export const SEVERITIES: { value: Severity; label: string }[] = [
  { value: 'low',      label: 'Low'      },
  { value: 'medium',   label: 'Medium'   },
  { value: 'high',     label: 'High'     },
  { value: 'critical', label: 'Critical' },
];

export const STATUSES: { value: EventStatus; label: string }[] = [
  { value: 'open',         label: 'Open'         },
  { value: 'acknowledged', label: 'Acknowledged' },
  { value: 'resolved',     label: 'Resolved'     },
];
