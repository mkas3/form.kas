'use client';

import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, useFormField } from '@/components/ui/form';

type FormCheckboxProps = React.ComponentPropsWithoutRef<typeof Checkbox>;

const FormCheckbox = ({
  defaultChecked = false,
  ...props
}: FormCheckboxProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultChecked, field.value, field.onChange);

  return (
    <FormControl>
      <Checkbox
        {...field}
        checked={field.value ?? defaultChecked}
        onCheckedChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
};

export { FormCheckbox };
