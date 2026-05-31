function setOverlayVisible(layer: HTMLElement, visible: boolean) {
  layer.hidden = !visible;
  layer.setAttribute('aria-hidden', visible ? 'false' : 'true');
}

function captureActiveElement(): HTMLElement | null {
  const active = document.activeElement;
  return active instanceof HTMLElement ? active : null;
}

function setInertTarget(target: HTMLElement | null | undefined, blocked: boolean) {
  if (!target) return;
  if (blocked) target.setAttribute('inert', '');
  else target.removeAttribute('inert');
}

function focusOnNextFrame(element: HTMLElement | null | undefined) {
  requestAnimationFrame(() => element?.focus());
}

export function showImperativeOverlay({
  layer,
  inertTarget,
  dismissBlockedRef,
  previousFocusRef,
  focusTarget,
}: {
  layer: HTMLDivElement;
  inertTarget: HTMLElement | null | undefined;
  dismissBlockedRef: { current: boolean };
  previousFocusRef: { current: HTMLElement | null };
  focusTarget: HTMLElement | null | undefined;
}) {
  previousFocusRef.current = captureActiveElement();
  dismissBlockedRef.current = true;
  setInertTarget(inertTarget, true);
  setOverlayVisible(layer, true);
  focusOnNextFrame(focusTarget);
}

export function hideImperativeOverlay({
  layer,
  inertTarget,
  dismissBlockedRef,
  previousFocusRef,
}: {
  layer: HTMLDivElement;
  inertTarget: HTMLElement | null | undefined;
  dismissBlockedRef: { current: boolean };
  previousFocusRef: { current: HTMLElement | null };
}) {
  dismissBlockedRef.current = false;
  setInertTarget(inertTarget, false);
  setOverlayVisible(layer, false);
  previousFocusRef.current?.focus();
  previousFocusRef.current = null;
}

export function isOverlayHidden(layer: HTMLDivElement | null | undefined): boolean {
  if (!layer) return true;
  return layer.hasAttribute('hidden');
}

export function isEscapeKey(key: string): boolean {
  return key === 'Escape';
}
