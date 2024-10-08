'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import {
  FormInputOTP,
  FormInputOTPGroup,
  FormInputOTPSeparator,
  FormInputOTPSlot
} from '@/components/shared/form/form-input-otp';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  otp: z.string().length(6, 'OTP must be exactly 6 digits long.')
});

type FormProps = z.infer<typeof formSchema>;

export const InputOTPExamplePassword = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(`OTP Confirmed: ${JSON.stringify(data)}`);
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='otp'>
        <FormInputOTP maxLength={6}>
          <FormInputOTPGroup>
            <FormInputOTPSlot index={0} />
            <FormInputOTPSlot index={1} />
            <FormInputOTPSlot index={2} />
          </FormInputOTPGroup>
          <FormInputOTPSeparator />
          <FormInputOTPGroup>
            <FormInputOTPSlot index={3} />
            <FormInputOTPSlot index={4} />
            <FormInputOTPSlot index={5} />
          </FormInputOTPGroup>
        </FormInputOTP>
        <FormMessage />
      </FormFieldItem>
      <Button className='mt-2' type='submit'>
        Submit OTP
      </Button>
    </Form>
  );
};
