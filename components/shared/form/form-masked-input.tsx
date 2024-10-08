'use client';

import React, { forwardRef, useImperativeHandle } from 'react';
import { useController } from 'react-hook-form';
import type { MaskedInputProps } from 'react-text-mask';
import MaskedInput from 'react-text-mask';

import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const FormMaskedInput = forwardRef<React.ElementRef<typeof MaskedInput>, MaskedInputProps>(
  ({ defaultValue = '', ...props }, ref) => {
    const { name } = useFormField();
    const {
      field: { ref: fieldRef, ...field }
    } = useController({
      name
    });
    useImperativeHandle(fieldRef, () => ref);
    useFormDefaultValue(defaultValue, field.value, field.onChange);

    return (
      <FormControl>
        <MaskedInput
          {...field}
          ref={ref}
          render={(ref, props) => (
            <Input ref={ref as React.LegacyRef<HTMLInputElement>} {...props} />
          )}
          value={field.value ?? defaultValue}
          {...props}
        />
      </FormControl>
    );
  }
);
FormMaskedInput.displayName = 'MaskedInput';

export { FormMaskedInput };
