import { useState, useCallback } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';

export function useColumnToggleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);
  const ref = useClickOutside<HTMLDivElement>(close);

  return { isOpen, toggle, ref };
}
