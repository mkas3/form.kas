'use client';

import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

type FormInputOTPProps = React.ComponentPropsWithoutRef<typeof InputOTP>;

const FormInputOTP = ({ defaultValue = '', ...props }: FormInputOTPProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <InputOTP {...field} value={field.value ?? defaultValue} {...props} />
    </FormControl>
  );
};

const FormInputOTPGroup = InputOTPGroup;

const FormInputOTPSlot = InputOTPSlot;

export { FormInputOTP, FormInputOTPGroup, FormInputOTPSlot };
