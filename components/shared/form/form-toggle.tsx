'use client';

import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { Toggle } from '@/components/ui/toggle';

export type FormToggleProps = React.ComponentPropsWithoutRef<typeof Toggle>;

const FormToggle = ({ defaultPressed = false, ...props }: FormToggleProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultPressed, field.value, field.onChange);

  return (
    <FormControl>
      <Toggle
        {...field}
        pressed={field.value ?? defaultPressed}
        onPressedChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
};

export { FormToggle };
