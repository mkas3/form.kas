'use client';

import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FormSelectProps = React.ComponentPropsWithoutRef<typeof Select>;

type FormSelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectTrigger
>;

const FormSelect = ({ defaultValue, ...props }: FormSelectProps) => {
  const { name } = useFormField();
  const {
    field: { ref, ...field },
  } = useController({
    name,
  });

  return (
    <Select
      {...field}
      value={field.value ?? defaultValue}
      onValueChange={field.onChange}
      {...props}
    />
  );
};

const FormSelectTrigger = ({ ...props }: FormSelectTriggerProps) => {
  return (
    <FormControl>
      <SelectTrigger {...props} />
    </FormControl>
  );
};

const FormSelectValue = SelectValue;

const FormSelectContent = SelectContent;

const FormSelectItem = SelectItem;

const FormSelectGroup = SelectGroup;

const FormSelectLabel = SelectLabel;

const FormSelectSeparator = SelectSeparator;

export {
  FormSelect,
  FormSelectTrigger,
  FormSelectValue,
  FormSelectContent,
  FormSelectItem,
  FormSelectGroup,
  FormSelectLabel,
  FormSelectSeparator,
};
