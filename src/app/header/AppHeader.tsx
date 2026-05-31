import { memo } from 'react';
import { AppHeaderBrand } from './AppHeaderBrand';
import { AppHeaderCenter } from './AppHeaderCenter';
import { AppHeaderActions } from './AppHeaderActions';
import { AppHeaderMobileMeta } from './AppHeaderMobileMeta';
import { headerClass, headerStyle, headerRowClass } from './AppHeader.styles';

export const AppHeader = memo(function AppHeader() {
  return (
    <header className={headerClass} style={headerStyle}>
      <div className={headerRowClass}>
        <AppHeaderBrand />
        <AppHeaderCenter />
        <AppHeaderActions />
      </div>
      <AppHeaderMobileMeta />
    </header>
  );
});
