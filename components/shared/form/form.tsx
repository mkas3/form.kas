import type { FieldValues, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';

import type { UseZodFormReturn } from '@/hooks/use-zod-form';

import { forwardRef } from 'react';

import { Form as FormPrimitive } from '@/components/ui/form';

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
