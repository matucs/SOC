import { useCallback, useEffect, useRef } from 'react';

/** Keeps a callback ref current without re-subscribing effects or handlers. */
export function useStableHandler<T extends (...args: never[]) => void>(handler: T) {
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });
  return handlerRef;
}

/** Stable function identity with always-fresh handler behavior — for DOM onClick/onSubmit. */
export function useStableCallback<T extends (...args: never[]) => void>(handler: T): T {
  const handlerRef = useStableHandler(handler);
  return useCallback((...args: Parameters<T>) => handlerRef.current(...args), [handlerRef]) as T;
}
