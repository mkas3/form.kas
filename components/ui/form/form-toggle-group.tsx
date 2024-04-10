'use client';

import { useMemo } from 'react';
import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export type FormToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroup
>;

export type FormToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroup
>;

const FormToggleGroup = ({
  type,
  defaultValue,
  ...props
}: FormToggleGroupProps) => {
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
        value={field.value ?? defaultValue ?? innerDefaultValue}
        onValueChange={field.onChange}
        type={type as any}
        {...props}
      />
    </FormControl>
  );
};

const FormToggleGroupItem = ToggleGroupItem;

export { FormToggleGroup, FormToggleGroupItem };
