'use client';

import { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export type FormRadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroup
>;

export type FormRadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupItem
>;

const FormRadioGroup = ({ defaultValue, ...props }: FormRadioGroupProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });

  return (
    <FormControl>
      <RadioGroup
        {...field}
        value={field.value ?? defaultValue}
        onValueChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
};

const FormRadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  FormRadioGroupItemProps
>(({ ...props }, ref) => {
  return (
    <FormControl>
      <RadioGroupItem ref={ref} {...props} />
    </FormControl>
  );
});
FormRadioGroupItem.displayName = 'RadioGroupItem';

export { FormRadioGroup, FormRadioGroupItem };
