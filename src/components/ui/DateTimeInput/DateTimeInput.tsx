import { memo } from 'react';
import type { DateTimeInputProps } from './DateTimeInput.types';
import { DATE_INPUT_TYPE, TIME_INPUT_TYPE } from './DateTimeInput.constants';
import { ARIA_LABEL_DATE, ARIA_LABEL_TIME } from './DateTimeInput.strings';
import { todayDateLocal } from './datetimeInput.utils';
import { useDateTimeInput } from './useDateTimeInput';
import { DateTimeInputHidden } from './DateTimeInputHidden';
import { DateTimeInputField } from './DateTimeInputField';
import { wrapperClass } from './DateTimeInput.styles';

export const DateTimeInput = memo(function DateTimeInput({
  id,
  name,
  defaultValue = '',
  maxDate = todayDateLocal(),
  inputRef,
  style,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
  onDirty,
}: DateTimeInputProps) {
  const {
    hiddenDefault,
    defaultDate,
    defaultTime,
    timeId,
    hiddenRef,
    setDateRef,
    setTimeRef,
    handleChange,
    fieldStyle,
  } = useDateTimeInput({
    defaultValue,
    inputRef,
    style,
    ariaInvalid,
    onDirty,
  });

  return (
    <>
      <DateTimeInputHidden
        hiddenRef={hiddenRef}
        name={name}
        defaultValue={hiddenDefault}
      />

      <div className={wrapperClass}>
        <DateTimeInputField
          id={id}
          type={DATE_INPUT_TYPE}
          defaultValue={defaultDate}
          max={maxDate}
          inputRef={setDateRef}
          onInput={handleChange}
          ariaInvalid={ariaInvalid}
          ariaDescribedBy={ariaDescribedBy}
          ariaLabel={ARIA_LABEL_DATE}
          style={fieldStyle}
        />
        <DateTimeInputField
          id={timeId}
          type={TIME_INPUT_TYPE}
          defaultValue={defaultTime}
          inputRef={setTimeRef}
          onInput={handleChange}
          ariaInvalid={ariaInvalid}
          ariaDescribedBy={ariaDescribedBy}
          ariaLabel={ARIA_LABEL_TIME}
          style={fieldStyle}
        />
      </div>
    </>
  );
});
