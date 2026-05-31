import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import {
  BUTTON_DEFAULT_CLASS,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
} from './Button.constants';
import { getButtonClassName, isButtonDisabled } from './button.utils';
import { ButtonSpinner } from './ButtonSpinner';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = BUTTON_DEFAULT_VARIANT,
    size = BUTTON_DEFAULT_SIZE,
    isLoading = false,
    children,
    className = BUTTON_DEFAULT_CLASS,
    disabled,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={getButtonClassName(variant, size, className)}
      disabled={isButtonDisabled(disabled, isLoading)}
      {...props}
    >
      {isLoading && <ButtonSpinner />}
      {children}
    </button>
  );
});

export type { ButtonProps } from './Button.types';
