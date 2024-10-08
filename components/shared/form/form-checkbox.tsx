'use client';

import { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, useFormField } from '@/components/ui/form';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const FormCheckbox = forwardRef<
  React.ElementRef<typeof Checkbox>,
  React.ComponentPropsWithoutRef<typeof Checkbox>
>(({ defaultChecked = false, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  useFormDefaultValue(defaultChecked, field.value, field.onChange);

  return (
    <FormControl>
      <Checkbox
        {...field}
        ref={ref}
        checked={field.value ?? defaultChecked}
        onCheckedChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
});
FormCheckbox.displayName = Checkbox.displayName;

export { FormCheckbox };
