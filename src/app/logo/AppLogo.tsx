import { ShieldLogoIcon } from '../../components/ui/icons';
import { logoBoxClass, logoBoxStyle } from './AppLogo.styles';

export const AppLogo = () => (
  <div className={logoBoxClass} style={logoBoxStyle}>
    <ShieldLogoIcon />
  </div>
);
