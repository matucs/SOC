import { memo } from 'react';
import type { DateTimeInputHiddenProps } from './DateTimeInput.types';
import { HIDDEN_INPUT_TYPE } from './DateTimeInput.constants';

export const DateTimeInputHidden = memo(function DateTimeInputHidden({
  hiddenRef,
  name,
  defaultValue,
}: DateTimeInputHiddenProps) {
  return (
    <input
      ref={hiddenRef}
      type={HIDDEN_INPUT_TYPE}
      name={name}
      defaultValue={defaultValue}
    />
  );
});
