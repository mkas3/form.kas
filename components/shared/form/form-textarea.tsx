'use client';

import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { useFormField } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const FormTextarea = forwardRef<
  React.ElementRef<typeof Textarea>,
  React.ComponentPropsWithoutRef<typeof Textarea>
>(({ defaultValue = '', ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return <Textarea {...field} ref={ref} value={field.value ?? defaultValue} {...props} />;
});
FormTextarea.displayName = Textarea.displayName;

export { FormTextarea };
