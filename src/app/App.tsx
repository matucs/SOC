import { memo } from 'react';
import { AppHeader } from './header';
import { AppMain } from './main';
import { SimulatedEventFeedBridge } from './SimulatedEventFeedBridge';
import { appContainerClass, appContainerStyle } from './App.styles';

function App() {
  return (
    <div className={appContainerClass} style={appContainerStyle}>
      <SimulatedEventFeedBridge />
      <AppHeader />
      <AppMain />
    </div>
  );
}

export default memo(App);
