import type { ReactNode } from 'react';

export interface FieldLabelProps {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}
