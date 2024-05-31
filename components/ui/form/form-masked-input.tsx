'use client';

import React, { forwardRef, useImperativeHandle } from 'react';
import { useController } from 'react-hook-form';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormMaskedInput = forwardRef<
  React.ElementRef<typeof MaskedInput>,
  MaskedInputProps
>(({ defaultValue = '', ...props }, ref) => {
  const { name } = useFormField();
  const {
    field: { ref: fieldRef, ...field },
  } = useController({
    name,
  });
  useImperativeHandle(fieldRef, () => ref);
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <MaskedInput
        {...field}
        ref={ref}
        value={field.value ?? defaultValue}
        render={(ref, props) => (
          <Input ref={ref as React.LegacyRef<HTMLInputElement>} {...props} />
        )}
        {...props}
      />
    </FormControl>
  );
});
FormMaskedInput.displayName = 'FormMaskedInput';

export { FormMaskedInput };
