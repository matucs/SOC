import type { ButtonProps } from './Button.types';
import { buttonBaseClass, sizeStyles, variantStyles } from './Button.styles';

export function getButtonClassName(
  variant: NonNullable<ButtonProps['variant']>,
  size: NonNullable<ButtonProps['size']>,
  className: string,
): string {
  return `${buttonBaseClass} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();
}

export function isButtonDisabled(
  disabled: ButtonProps['disabled'],
  isLoading: boolean,
): boolean {
  return !!disabled || isLoading;
}
