'use client';

import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { useFormField } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

export type FormTextareaProps = React.ComponentPropsWithoutRef<typeof Textarea>;

const FormTextarea = ({ defaultValue = '', ...props }: FormTextareaProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return <Textarea {...field} value={field.value ?? defaultValue} {...props} />;
};

export { FormTextarea };
