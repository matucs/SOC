import { useEffect, useRef } from 'react';
import { useStableHandler } from './useStableHandler';

export function useClickOutside<T extends HTMLElement>(onDismiss: () => void) {
  const ref = useRef<T>(null);
  const onDismissRef = useStableHandler(onDismiss);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onDismissRef.current();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onDismissRef]);

  return ref;
}
