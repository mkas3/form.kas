import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import { forwardRef } from 'react';

import { FormItem } from '@/components/ui/form';

import { FormFieldControl } from './form-field-control';

type FormFieldItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  children?: React.ReactNode;
  className?: string;
};

const InternalFormFieldItem = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  { children, className, ...props }: FormFieldItemProps<TFieldValues, TName>,
  ref?: React.LegacyRef<HTMLDivElement>
) => {
  return (
    <FormFieldControl {...props}>
      <FormItem ref={ref} className={className}>
        {children}
      </FormItem>
    </FormFieldControl>
  );
};

const FormFieldItem = forwardRef(InternalFormFieldItem) as <
  TFieldValues extends FieldValues = FieldValues
>(
  props: FormFieldItemProps<TFieldValues> & { ref?: React.LegacyRef<HTMLDivElement> }
) => ReturnType<typeof InternalFormFieldItem>;

export { FormFieldItem };
