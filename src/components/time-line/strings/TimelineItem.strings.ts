export const LOCATION_PREFIX = '📍';
export const SEVERITY_SUFFIX = 'severity';

export const itemAriaLabel = (
  title: string,
  severity: string,
  location: string,
  relativeTime: string,
) => `${title}, ${severity} ${SEVERITY_SUFFIX}, ${location}, ${relativeTime}`;
