import type { EventStatus, EventType, Severity } from '../../../data/types';
import {
  EVENT_TYPES,
  SEVERITIES,
  STATUSES,
} from './EventForm.constants';
import {
  SEVERITY_FIELD_ACCENTS,
  STATUS_FIELD_ACCENTS,
  TYPE_FIELD_ACCENTS,
} from './formFieldTheme.constants';
import { FIELD_IDS } from './EventFormBody.constants';
import { LOCATIONS } from '../../../data/locations';
import {
  LABEL_LOCATION,
  LABEL_SEVERITY,
  LABEL_STATUS,
  LABEL_TYPE,
  PLACEHOLDER_LOCATION,
} from '../strings/EventFormBody.strings';
import type { FormSelectOption } from '../body/formSelect';
import type { EventValueAccent } from '../../../theme/eventValueTheme';
import { GRID_MUTED_FIELD_ACCENT } from './formFieldTheme.constants';

export interface EventFormSelectFieldConfig<T extends string> {
  id: string;
  name: string;
  label: string;
  options: readonly FormSelectOption<T>[];
  getAccent: (value: T) => EventValueAccent;
  placeholder?: string;
}

export const TYPE_SELECT_FIELD: EventFormSelectFieldConfig<EventType> = {
  id: FIELD_IDS.type,
  name: 'type',
  label: LABEL_TYPE,
  options: EVENT_TYPES,
  getAccent: (value) => TYPE_FIELD_ACCENTS[value],
};

export const SEVERITY_SELECT_FIELD: EventFormSelectFieldConfig<Severity> = {
  id: FIELD_IDS.severity,
  name: 'severity',
  label: LABEL_SEVERITY,
  options: SEVERITIES,
  getAccent: (value) => SEVERITY_FIELD_ACCENTS[value],
};

export const STATUS_SELECT_FIELD: EventFormSelectFieldConfig<EventStatus> = {
  id: FIELD_IDS.status,
  name: 'status',
  label: LABEL_STATUS,
  options: STATUSES,
  getAccent: (value) => STATUS_FIELD_ACCENTS[value],
};

export const LOCATION_SELECT_FIELD: EventFormSelectFieldConfig<string> = {
  id: FIELD_IDS.location,
  name: 'location',
  label: LABEL_LOCATION,
  options: LOCATIONS.map((location) => ({ value: location, label: location })),
  getAccent: () => GRID_MUTED_FIELD_ACCENT,
  placeholder: PLACEHOLDER_LOCATION,
};
