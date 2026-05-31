import { useEffect, useRef, type MouseEvent } from 'react';
import { useStableCallback, useStableHandler } from '../../../hooks/useStableHandler';
import type { UseConfirmDialogOptions, UseConfirmDialogResult } from './ConfirmDialog.types';
import {
  CONFIRM_DIALOG_FOCUS_DELAY_MS,
  CONFIRM_DIALOG_KEYDOWN_CAPTURE,
  Key,
} from './ConfirmDialog.constants';

export function useConfirmDialog({
  isOpen,
  onCancel,
}: UseConfirmDialogOptions): UseConfirmDialogResult {
  const overlayRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const onCancelRef = useStableHandler(onCancel);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      cancelRef.current?.focus();
    }, CONFIRM_DIALOG_FOCUS_DELAY_MS);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== Key.ESCAPE) return;
      e.stopPropagation();
      onCancelRef.current();
    };

    document.addEventListener(Key.KEYDOWN, handleKeyDown, CONFIRM_DIALOG_KEYDOWN_CAPTURE);
    return () =>
      document.removeEventListener(Key.KEYDOWN, handleKeyDown, CONFIRM_DIALOG_KEYDOWN_CAPTURE);
  }, [isOpen, onCancelRef]);

  const handleBackdropClick = useStableCallback((e: MouseEvent) => {
    if (e.target === overlayRef.current) onCancelRef.current();
  });

  const handlePanelClick = useStableCallback((e: MouseEvent) => {
    e.stopPropagation();
  });

  return {
    overlayRef,
    cancelRef,
    handleBackdropClick,
    handlePanelClick,
  };
}
