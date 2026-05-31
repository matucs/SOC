import { memo } from 'react';
import type { FieldErrorProps } from './FieldError.types';
import { fieldErrorA11yProps } from './FieldError.constants';
import { FieldErrorIcon } from '../icons';
import { fieldErrorClass } from './FieldError.styles';

export const FieldError = memo(function FieldError({ error, id }: FieldErrorProps) {
  if (!error) return null;

  return (
    <p className={fieldErrorClass} {...fieldErrorA11yProps(id)}>
      <FieldErrorIcon />
      {error}
    </p>
  );
});
