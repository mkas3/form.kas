'use client';

import React, { forwardRef, useMemo } from 'react';
import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const FormToggleGroup = forwardRef<
  React.ElementRef<typeof ToggleGroup>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup>
>(({ type, defaultValue, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  const innerDefaultValue = useMemo(
    () => (type === 'multiple' ? ([] as string[]) : ('' as string)),
    [type]
  );
  useFormDefaultValue(innerDefaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <ToggleGroup
        {...field}
        ref={ref}
        type={type as any}
        value={field.value ?? defaultValue ?? innerDefaultValue}
        onValueChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
});
FormToggleGroup.displayName = ToggleGroup.displayName;

const FormToggleGroupItem = ToggleGroupItem;

export { FormToggleGroup, FormToggleGroupItem };
