import type { FormState, FormErrors } from '../types/EventForm.types';
import { LOCATIONS } from '../../../data/locations';
import {
  ERR_TITLE_REQUIRED,
  ERR_TITLE_TOO_SHORT,
  ERR_TIMESTAMP_REQUIRED,
  ERR_TIMESTAMP_FUTURE,
  ERR_LOCATION_REQUIRED,
  ERR_LOCATION_INVALID,
} from '../strings/EventForm.strings';

const VALID_LOCATIONS = new Set<string>(LOCATIONS);

export function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.title.trim()) {
    errors.title = ERR_TITLE_REQUIRED;
  } else if (values.title.trim().length < 3) {
    errors.title = ERR_TITLE_TOO_SHORT;
  }

  if (!values.timestamp) {
    errors.timestamp = ERR_TIMESTAMP_REQUIRED;
  } else if (new Date(values.timestamp) > new Date()) {
    errors.timestamp = ERR_TIMESTAMP_FUTURE;
  }

  const location = values.location.trim();
  if (!location) {
    errors.location = ERR_LOCATION_REQUIRED;
  } else if (!VALID_LOCATIONS.has(location)) {
    errors.location = ERR_LOCATION_INVALID;
  }

  return errors;
}
