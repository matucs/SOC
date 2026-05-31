import type { RefObject } from 'react';
import { Key } from './Modal.constants';

export function queryFocusableElements(
  container: HTMLElement | null,
  selectors: string,
): HTMLElement[] {
  if (!container) return [];
  return Array.from(container.querySelectorAll<HTMLElement>(selectors));
}

export function isDismissBlocked(dismissBlockedRef?: RefObject<boolean>): boolean {
  return dismissBlockedRef?.current === true;
}

export function trapTabKey(e: KeyboardEvent, focusable: HTMLElement[]): void {
  if (e.key !== Key.TAB || focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
    return;
  }

  if (document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

export function restoreFocus(trigger: Element | null): void {
  if (trigger instanceof HTMLElement) {
    trigger.focus();
  }
}
