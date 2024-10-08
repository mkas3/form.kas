'use client';

import { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const FormSwitch = forwardRef<
  React.ElementRef<typeof Switch>,
  React.ComponentPropsWithoutRef<typeof Switch>
>(({ defaultChecked = false, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  useFormDefaultValue(defaultChecked, field.value, field.onChange);

  return (
    <FormControl>
      <Switch
        {...field}
        ref={ref}
        checked={field.value ?? defaultChecked}
        onCheckedChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
});
FormSwitch.displayName = Switch.displayName;

export { FormSwitch };
