'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormPasswordInput } from '@/components/shared/form/form-password-input';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  password: z.string().min(1, { message: 'Please enter password.' })
});

type FormProps = z.infer<typeof formSchema>;

export const PasswordInputExampleAuth = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='password'>
        <FormPasswordInput placeholder='Please enter password' />
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Login</Button>
    </Form>
  );
};
