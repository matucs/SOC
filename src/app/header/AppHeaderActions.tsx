import { AppHeaderNewEventButton } from './AppHeaderNewEventButton';
import { headerRightClass } from './AppHeader.styles';

export const AppHeaderActions = () => (
  <div className={headerRightClass}>
    <AppHeaderNewEventButton />
  </div>
);
