'use client';

import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const FormInput = forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ defaultValue = '', ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <Input {...field} ref={ref} value={field.value ?? defaultValue} {...props} />
    </FormControl>
  );
});
FormInput.displayName = Input.displayName;

export { FormInput };
