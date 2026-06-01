import { FIELD_IDS } from './EventFormBody.constants';
import {
  LABEL_TITLE,
  PLACEHOLDER_TITLE,
} from '../strings/EventFormBody.strings';

export const TITLE_TEXT_FIELD = {
  id: FIELD_IDS.title,
  name: 'title',
  label: LABEL_TITLE,
  placeholder: PLACEHOLDER_TITLE,
} as const;
