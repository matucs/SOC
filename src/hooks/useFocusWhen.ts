import { useRef, useEffect } from 'react';

/** Focuses a ref target once when `shouldFocus` becomes true. */
export function useFocusWhen<T extends HTMLElement>(shouldFocus: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (shouldFocus) ref.current?.focus();
  }, [shouldFocus]);

  return ref;
}
