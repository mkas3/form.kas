'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormMaskedInput } from '@/components/shared/form/form-masked-input';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const phoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

const formSchema = z.object({
  phone: z
    .string()
    .min(1, 'Please type phone number.')
    .refine((val) => val.at(-1) !== '_', {
      message: 'Phone number is too short.'
    })
});

type FormProps = z.infer<typeof formSchema>;

export const MaskedInputExamplePhone = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(`Phone number submitted: ${JSON.stringify(data)}`);
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='phone'>
        <FormMaskedInput mask={phoneMask} placeholder='Enter your phone number' />
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Register</Button>
    </Form>
  );
};
