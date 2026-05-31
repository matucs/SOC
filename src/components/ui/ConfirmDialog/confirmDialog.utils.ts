import { overlayStyle, overlayStyleTransparent } from './ConfirmDialog.styles';

export function getConfirmDialogOverlayStyle(scrim: boolean) {
  return scrim ? overlayStyle : overlayStyleTransparent;
}
