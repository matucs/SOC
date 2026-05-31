import { AppLogo } from '../logo';
import { APP_TITLE, APP_SUBTITLE } from './AppHeader.strings';
import {
  headerLeftClass,
  titleWrapClass,
  appTitleClass,
  appSubtitleClass,
} from './AppHeader.styles';

export const AppHeaderBrand = () => (
  <div className={headerLeftClass}>
    <AppLogo />
    <div className={titleWrapClass}>
      <h1 className={appTitleClass}>{APP_TITLE}</h1>
      <p className={appSubtitleClass}>{APP_SUBTITLE}</p>
    </div>
  </div>
);
