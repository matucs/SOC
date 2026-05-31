export const FIELD_ERROR_ID_SUFFIX = '-error';

export const FIELD_ERROR_ROLE = 'alert';

export function fieldErrorId(fieldId: string): string {
  return `${fieldId}${FIELD_ERROR_ID_SUFFIX}`;
}

export function fieldErrorA11yProps(id?: string) {
  return {
    role: FIELD_ERROR_ROLE,
    ...(id ? { id } : {}),
  } as const;
}
