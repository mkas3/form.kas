'use client';

import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { Toggle } from '@/components/ui/toggle';

const FormToggle = forwardRef<
  React.ElementRef<typeof Toggle>,
  React.ComponentPropsWithoutRef<typeof Toggle>
>(({ defaultPressed = false, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultPressed, field.value, field.onChange);

  return (
    <FormControl>
      <Toggle
        {...field}
        ref={ref}
        pressed={field.value ?? defaultPressed}
        onPressedChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
});
FormToggle.displayName = Toggle.displayName;

export { FormToggle };
