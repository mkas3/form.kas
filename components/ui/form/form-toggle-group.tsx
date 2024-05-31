'use client';

import React, { forwardRef, useMemo } from 'react';
import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const FormToggleGroup = forwardRef<
  React.ElementRef<typeof ToggleGroup>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup>
>(({ type, defaultValue, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
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
        value={field.value ?? defaultValue ?? innerDefaultValue}
        onValueChange={field.onChange}
        type={type as any}
        {...props}
      />
    </FormControl>
  );
});
FormToggleGroup.displayName = ToggleGroup.displayName;

const FormToggleGroupItem = ToggleGroupItem;

export { FormToggleGroup, FormToggleGroupItem };
