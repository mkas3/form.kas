import React, { forwardRef } from 'react';
import type { FieldValues, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';

import { Form as FormPrimitive } from '@/components/ui/form';
import type { UseZodFormReturn } from '@/hooks/use-zod-form';

type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
  React.ComponentPropsWithoutRef<'form'>,
  'onSubmit'
> & {
  form: UseZodFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  onInvalidSubmit?: SubmitErrorHandler<TFieldValues>;
};

const InternalForm = <TFieldValues extends FieldValues = FieldValues>(
  { form, onSubmit, onInvalidSubmit, ...props }: FormProps<TFieldValues>,
  ref?: React.ForwardedRef<HTMLFormElement>
) => {
  return (
    <FormPrimitive {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} {...props} />
    </FormPrimitive>
  );
};

const Form = forwardRef(InternalForm) as <TFieldValues extends FieldValues = FieldValues>(
  props: FormProps<TFieldValues> & { ref?: React.ForwardedRef<HTMLFormElement> }
) => ReturnType<typeof InternalForm<TFieldValues>>;

export { Form };
