import type { EventValueAccent } from '../../../theme/eventValueTheme';
import { getInputStyle } from '../styles/EventFormBody.styles';
import type { FormSelectAccentStyle } from '../types/FormSelect.types';

export function getFormSelectAccentStyle(
  accent: EventValueAccent,
  hasError = false,
): FormSelectAccentStyle {
  const base = getInputStyle(hasError);
  if (hasError) return base;
  return {
    ...base,
    color: accent.color,
    borderColor: accent.borderColor,
    background: accent.background,
  };
}

export function getFormSelectOptionStyle(accent: EventValueAccent): FormSelectAccentStyle {
  return {
    background: accent.background,
    color: accent.color,
  };
}
