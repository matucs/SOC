import type { SecurityEvent } from './types';
import { createRandomEvent } from './createRandomEvent';

function randomDate(daysBack: number): Date {
  const now = Date.now();
  const offset = Math.random() * daysBack * 24 * 60 * 60 * 1000;
  return new Date(now - offset);
}

export function generateMockEvents(count = 200): SecurityEvent[] {
  return Array.from({ length: count }, (_, i) => ({
    ...createRandomEvent(randomDate(30)),
    id: `EVT-${String(i + 1).padStart(4, '0')}`,
  })).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}

export const INITIAL_EVENTS = generateMockEvents(200);
