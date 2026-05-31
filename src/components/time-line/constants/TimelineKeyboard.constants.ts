export const TIMELINE_KEY_LEFT = 'ArrowLeft';
export const TIMELINE_KEY_RIGHT = 'ArrowRight';
export const TIMELINE_KEY_UP = 'ArrowUp';
export const TIMELINE_KEY_DOWN = 'ArrowDown';

export const TIMELINE_NAV_KEYS = [
  TIMELINE_KEY_LEFT,
  TIMELINE_KEY_RIGHT,
  TIMELINE_KEY_UP,
  TIMELINE_KEY_DOWN,
] as const;

export type TimelineNavKey = (typeof TIMELINE_NAV_KEYS)[number];

export const TIMELINE_INITIAL_GROUP = 0;

export const TIMELINE_INITIAL_ITEM = -1;

export function isTimelineNavKey(key: string): key is TimelineNavKey {
  return (TIMELINE_NAV_KEYS as readonly string[]).includes(key);
}
