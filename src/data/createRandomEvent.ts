import type { SecurityEvent, EventType, Severity, EventStatus } from './types';
import { LOCATIONS } from './locations';

const EVENT_TITLES: Record<EventType, string[]> = {
  access: [
    'Unauthorized access attempt',
    'Door forced open',
    'Badge denied — restricted zone',
    'Tailgating detected',
    'After-hours entry',
    'Multiple failed PIN attempts',
  ],
  camera: [
    'Motion detected — parking lot',
    'Camera offline',
    'Blind spot intrusion',
    'Face detection triggered',
    'Camera tampered',
    'Low visibility alert',
  ],
  alarm: [
    'Fire alarm triggered',
    'Perimeter breach',
    'Panic button activated',
    'Glass break detected',
    'Smoke detector alert',
    'Intrusion alarm',
  ],
  system: [
    'Server room temperature high',
    'Network anomaly detected',
    'License expiring soon',
    'Backup failed',
    'System health degraded',
    'Storage capacity warning',
  ],
};

const EVENT_TYPES: EventType[] = ['access', 'camera', 'alarm', 'system'];
const EVENT_STATUSES: EventStatus[] = ['open', 'acknowledged', 'resolved'];

const WEIGHTED_SEVERITIES: Severity[] = [
  'low', 'low', 'low',
  'medium', 'medium', 'medium',
  'high', 'high',
  'critical',
];

function randomFrom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomRef(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export function createRandomEvent(timestamp = new Date()): Omit<SecurityEvent, 'id'> {
  const type = randomFrom(EVENT_TYPES);
  return {
    title: randomFrom(EVENT_TITLES[type]),
    type,
    severity: randomFrom(WEIGHTED_SEVERITIES),
    status: randomFrom(EVENT_STATUSES),
    location: randomFrom(LOCATIONS),
    timestamp,
    description: `Automated detection via zone monitor. Ref: ${randomRef()}`,
  };
}
