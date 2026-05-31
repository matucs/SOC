export type EventType = 'access' | 'camera' | 'alarm' | 'system';
export type Severity = 'low' | 'medium' | 'high' | 'critical';
export type EventStatus = 'open' | 'acknowledged' | 'resolved';

export interface SecurityEvent {
  id: string;
  title: string;
  type: EventType;
  severity: Severity;
  status: EventStatus;
  location: string;
  timestamp: Date;
  description: string;
}
