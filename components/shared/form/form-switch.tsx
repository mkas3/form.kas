'use client';

import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';

type FormSwitchProps = React.ComponentPropsWithoutRef<typeof Switch>;

const FormSwitch = ({ defaultChecked = false, ...props }: FormSwitchProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultChecked, field.value, field.onChange);

  return (
    <FormControl>
      <Switch
        {...field}
        checked={field.value ?? defaultChecked}
        onCheckedChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
};

export { FormSwitch };
