'use client';

import type { ForwardedRef } from 'react';
import type { NumericFormatProps, PatternFormatProps } from 'react-number-format';

import { forwardRef, useImperativeHandle } from 'react';
import { useController } from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';

import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const useFormNumberInput = (
  ref: ForwardedRef<HTMLInputElement>,
  defaultValue: number | string | undefined
) => {
  const { name } = useFormField();
  const {
    field: { ref: fieldRef, ...field }
  } = useController({
    name
  });
  useImperativeHandle(fieldRef, () => ref);
  useFormDefaultValue(defaultValue, field.value, field.onChange);
  return field;
};

const FormNumberInput = forwardRef<
  React.ElementRef<typeof Input>,
  Omit<NumericFormatProps, 'defaultValue'> & {
    isNumericValue?: boolean;
    defaultValue?: string | undefined;
    defaultNumericValue?: number | undefined;
  }
>(
  (
    { isNumericValue = false, defaultValue = '', defaultNumericValue, customInput, ...props },
    ref
  ) => {
    const { onChange, ...field } = useFormNumberInput(
      ref,
      isNumericValue ? defaultNumericValue : defaultValue
    );

    return (
      <FormControl>
        <NumericFormat
          {...field}
          customInput={customInput ?? Input}
          getInputRef={ref}
          value={field.value ?? defaultValue}
          onValueChange={(values) => {
            onChange(isNumericValue ? values.floatValue : values.value);
          }}
          {...props}
        />
      </FormControl>
    );
  }
);
FormNumberInput.displayName = 'NumberInput';

const FormNumberMaskedInput = forwardRef<
  React.ElementRef<typeof Input>,
  Omit<PatternFormatProps, 'defaultValue'> & {
    isNumericValue?: boolean;
    defaultValue?: string | undefined;
    defaultNumericValue?: number | undefined;
  }
>(
  (
    { isNumericValue = false, defaultValue = '', defaultNumericValue, customInput, ...props },
    ref
  ) => {
    const { onChange, ...field } = useFormNumberInput(
      ref,
      isNumericValue ? defaultNumericValue : defaultValue
    );

    return (
      <FormControl>
        <PatternFormat
          {...field}
          customInput={customInput ?? Input}
          getInputRef={ref}
          value={field.value ?? defaultValue}
          onValueChange={(values) => {
            onChange(isNumericValue ? values.floatValue : values.value);
          }}
          {...props}
        />
      </FormControl>
    );
  }
);
FormNumberMaskedInput.displayName = 'NumberMaskedInput';

export { FormNumberInput, FormNumberMaskedInput };
