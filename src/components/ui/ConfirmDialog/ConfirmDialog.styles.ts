import { tokens } from '../../../theme/tokens';
import {
  panelBaseClass,
  panelStyle,
} from '../ConfirmAlert/ConfirmAlertPanel.styles';

export const overlayClass =
  'fixed inset-0 z-[60] flex items-center justify-center p-4 isolate';

export const dialogClass = `modal-enter ${panelBaseClass}`;

export const overlayStyle = {
  backgroundColor: tokens.scrimLight,
};

export const overlayStyleTransparent = {
  backgroundColor: 'transparent',
};

export { panelStyle as dialogStyle };
