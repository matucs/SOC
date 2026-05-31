import type { MouseEvent, RefObject } from 'react';

export interface ImperativeOverlayHandle {
  show: () => void;
  hide: () => void;
}

export interface UseImperativeOverlayOptions {
  inertTargetRef: RefObject<HTMLElement | null>;
  dismissBlockedRef: RefObject<boolean>;
  onDismiss: () => void;
}

export interface UseImperativeOverlayResult {
  layerRef: RefObject<HTMLDivElement | null>;
  focusTargetRef: RefObject<HTMLButtonElement | null>;
  handleLayerClick: (e: MouseEvent) => void;
  handlePanelClick: (e: MouseEvent) => void;
}
