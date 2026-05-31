import { formatDistanceToNow } from 'date-fns';

export function formatRelativeTime(timestamp: Date): string {
  return formatDistanceToNow(timestamp, { addSuffix: true });
}
