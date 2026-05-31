import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';
import { EventFormOverlay } from './app/EventFormOverlay';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <EventFormOverlay />
  </StrictMode>,
);
