import { useCallback, useEffect, useRef, type MouseEvent } from 'react';
import { useStableCallback, useStableHandler } from '../../../hooks/useStableHandler';
import type { UseModalOptions, UseModalResult } from './Modal.types';
import {
  FOCUSABLE_SELECTORS,
  Key,
  MODAL_FOCUS_DELAY_MS,
} from './Modal.constants';
import {
  isDismissBlocked,
  queryFocusableElements,
  restoreFocus,
  trapTabKey,
} from './modal.utils';

export function useModal({
  isOpen,
  onClose,
  dismissBlockedRef,
}: UseModalOptions): UseModalResult {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const onCloseRef = useStableHandler(onClose);

  const getFocusableElements = useCallback(
    () => queryFocusableElements(dialogRef.current, FOCUSABLE_SELECTORS),
    [],
  );

  const dismiss = useStableCallback(() => {
    if (isDismissBlocked(dismissBlockedRef)) return;
    onCloseRef.current();
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === Key.ESCAPE) {
        dismiss();
        return;
      }
      trapTabKey(e, getFocusableElements());
    },
    [dismiss, getFocusableElements],
  );

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      const timer = setTimeout(() => {
        getFocusableElements()[0]?.focus();
      }, MODAL_FOCUS_DELAY_MS);
      return () => clearTimeout(timer);
    }

    restoreFocus(triggerRef.current);
  }, [isOpen, getFocusableElements]);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener(Key.KEYDOWN, handleKeyDown);
    return () => document.removeEventListener(Key.KEYDOWN, handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleBackdropClick = useStableCallback((e: MouseEvent) => {
    if (isDismissBlocked(dismissBlockedRef)) return;
    if (e.target === overlayRef.current) onCloseRef.current();
  });

  const handleDialogClick = useStableCallback((e: MouseEvent) => {
    e.stopPropagation();
  });

  return {
    overlayRef,
    dialogRef,
    handleBackdropClick,
    handleDialogClick,
    handleCloseClick: dismiss,
  };
}
