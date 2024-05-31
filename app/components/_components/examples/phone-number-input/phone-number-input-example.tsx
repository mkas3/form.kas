'use client';

import React from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { FormPhoneNumberInput } from '@/components/ui/form/form-phone-number-input';

const formSchema = z.object({
  phone: z.object({
    phoneNumber: z
      .string({ errorMap: () => ({ message: 'Please enter phone number' }) })
      .min(1),
    country: z.string().refine((value) => value !== 'ZZ', {
      message: 'Select valid country',
    }),
  }),
});

type FormProps = z.infer<typeof formSchema>;

export const PhoneNumberInputExample = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='phone'>
        <FormPhoneNumberInput />
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Login</Button>
    </Form>
  );
};
