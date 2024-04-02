'use client';

import type { SubmitErrorHandler } from 'react-hook-form';

import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Form } from '@/components/shared/form/form';
import { FormFieldControl } from '@/components/shared/form/form-field-control';
import { FormMaskedInput } from '@/components/shared/form/form-masked-input';
import {
  FormNumberInput,
  FormNumberMaskedInput,
} from '@/components/shared/form/form-number-input';

type FormExampleProps = {};

const formSchema = z.object({
  username: z.any().nullish(),
});

type FormProps = z.infer<typeof formSchema>;

export const FormExample = ({ ...props }: FormExampleProps) => {
  const form = useZodForm(formSchema);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const onError: SubmitErrorHandler<z.infer<typeof formSchema>> = (errors) => {
    console.log(errors);
  };

  return (
    <Form
      className='space-y-8'
      form={form}
      onSubmit={onSubmit}
      onInvalidSubmit={onError}
    >
      <FormFieldControl<FormProps> name='username'>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormNumberMaskedInput format='### (###)' />
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormFieldControl>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};
