import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  type MouseEvent,
  type Ref,
} from 'react';
import {
  hideImperativeOverlay,
  isEscapeKey,
  isOverlayHidden,
  showImperativeOverlay,
} from './imperativeOverlay.utils';
import { useStableHandler } from './useStableHandler';
import type {
  ImperativeOverlayHandle,
  UseImperativeOverlayOptions,
  UseImperativeOverlayResult,
} from './useImperativeOverlay.types';

export function useImperativeOverlay(
  ref: Ref<ImperativeOverlayHandle>,
  { inertTargetRef, dismissBlockedRef, onDismiss }: UseImperativeOverlayOptions,
): UseImperativeOverlayResult {
  const layerRef = useRef<HTMLDivElement>(null);
  const focusTargetRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onDismissRef = useStableHandler(onDismiss);

  const show = useCallback(() => {
    const layer = layerRef.current;
    if (!layer) return;

    showImperativeOverlay({
      layer,
      inertTarget: inertTargetRef.current,
      dismissBlockedRef,
      previousFocusRef,
      focusTarget: focusTargetRef.current,
    });
  }, [dismissBlockedRef, inertTargetRef]);

  const hide = useCallback(() => {
    const layer = layerRef.current;
    if (!layer) return;

    hideImperativeOverlay({
      layer,
      inertTarget: inertTargetRef.current,
      dismissBlockedRef,
      previousFocusRef,
    });
  }, [dismissBlockedRef, inertTargetRef]);

  useImperativeHandle(ref, () => ({ show, hide }), [show, hide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOverlayHidden(layerRef.current) || !isEscapeKey(e.key)) return;
      e.stopPropagation();
      e.preventDefault();
      onDismissRef.current();
    };

    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [onDismissRef]);

  const handleLayerClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === layerRef.current) onDismissRef.current();
    },
    [onDismissRef],
  );

  const handlePanelClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  return {
    layerRef,
    focusTargetRef,
    handleLayerClick,
    handlePanelClick,
  };
}

export type {
  ImperativeOverlayHandle,
  UseImperativeOverlayOptions,
  UseImperativeOverlayResult,
} from './useImperativeOverlay.types';
