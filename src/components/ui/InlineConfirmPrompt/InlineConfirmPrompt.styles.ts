import { tokens } from '../../../theme/tokens';
import { panelBaseClass, panelStyle } from '../ConfirmAlert/ConfirmAlertPanel.styles';

export const layerClass =
  'absolute inset-0 z-10 flex items-center justify-center p-4 rounded-b-xl sm:rounded-b-lg';

export const panelClass = panelBaseClass;

export const layerStyle = {
  backgroundColor: tokens.scrimMedium,
};

export { panelStyle };
