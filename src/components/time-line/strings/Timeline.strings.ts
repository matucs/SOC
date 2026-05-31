// ── Timeline ──────────────────────────────────────────────────────────────────
export const ARIA_TIMELINE = 'Security event timeline';
export const EMPTY_TEXT = 'No events to display';
export const EVENTS_ACROSS = 'events across';
export const DAYS_SUFFIX = 'days';
export const KEYBOARD_HINT = '←→ groups · ↑↓ items';

// ── useTimelineKeyboard (announcement templates) ──────────────────────────────
export const announceGroup = (label: string, count: number) =>
  `Group: ${label}, ${count} events`;
export const announceItem = (title: string, severity: string, location: string) =>
  `${title}, ${severity}, ${location}`;
