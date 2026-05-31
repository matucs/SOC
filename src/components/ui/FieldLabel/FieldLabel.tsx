import { memo } from 'react';
import type { FieldLabelProps } from './FieldLabel.types';
import { labelClass, requiredMarkerClass } from './FieldLabel.styles';

export const FieldLabel = memo(function FieldLabel({ htmlFor, required, children }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
      {required && <span className={requiredMarkerClass}>*</span>}
    </label>
  );
});
