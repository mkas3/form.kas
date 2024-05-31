'use client';

import { FieldErrors } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { FormItem, FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormCheckbox } from '@/components/ui/form/form-checkbox';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms of service.',
  }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy.',
  }),
});

type FormProps = z.infer<typeof formSchema>;

export const CheckboxExampleRegistration = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  const handleInvalidSubmit = (data: FieldErrors<FormProps>) => {
    toast.error(JSON.stringify(data));
  };

  return (
    <Form
      className='flex flex-col gap-y-2'
      form={form}
      onSubmit={handleSubmit}
      onInvalidSubmit={handleInvalidSubmit}
    >
      <FormFieldItem<FormProps> name='terms'>
        <div className='flex items-end gap-x-2'>
          <FormCheckbox id='terms' />
          <Label htmlFor='terms'>I agree to the Terms of Service</Label>
        </div>
        <FormMessage />
      </FormFieldItem>
      <FormFieldItem<FormProps> name='privacyPolicy'>
        <div className='flex items-end gap-x-2'>
          <FormCheckbox id='privacyPolicy' />
          <Label htmlFor='privacyPolicy'>I agree to the Privacy Policy</Label>
        </div>
        <FormMessage />
      </FormFieldItem>
      <Button className='mt-4 w-fit' type='submit'>
        Register
      </Button>
    </Form>
  );
};
