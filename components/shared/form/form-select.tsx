'use client';

import React, { forwardRef } from 'react';
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
  SelectValue
} from '@/components/ui/select';

const FormSelect = ({ defaultValue, ...props }: React.ComponentPropsWithoutRef<typeof Select>) => {
  const { name } = useFormField();
  const {
    field: { ref, ...field }
  } = useController({
    name
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

const FormSelectTrigger = forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  React.ComponentPropsWithoutRef<typeof SelectTrigger>
>(({ ...props }, ref) => {
  return (
    <FormControl>
      <SelectTrigger ref={ref} {...props} />
    </FormControl>
  );
});
FormSelectTrigger.displayName = SelectTrigger.displayName;

const FormSelectValue = SelectValue;

const FormSelectContent = SelectContent;

const FormSelectItem = SelectItem;

const FormSelectGroup = SelectGroup;

const FormSelectLabel = SelectLabel;

const FormSelectSeparator = SelectSeparator;

export {
  FormSelect,
  FormSelectContent,
  FormSelectGroup,
  FormSelectItem,
  FormSelectLabel,
  FormSelectSeparator,
  FormSelectTrigger,
  FormSelectValue
};
