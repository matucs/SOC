import { memo } from 'react';
import { spinnerClass } from './Button.styles';

export const ButtonSpinner = memo(function ButtonSpinner() {
  return <span className={spinnerClass} aria-hidden />;
});
