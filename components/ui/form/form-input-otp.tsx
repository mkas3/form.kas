'use client';

import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const FormInputOTP = forwardRef<
  React.ElementRef<typeof InputOTP>,
  React.ComponentPropsWithoutRef<typeof InputOTP>
>(({ defaultValue = '', ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <InputOTP
        {...field}
        ref={ref}
        value={field.value ?? defaultValue}
        {...props}
      />
    </FormControl>
  );
});
FormInputOTP.displayName = InputOTP.displayName;

const FormInputOTPGroup = InputOTPGroup;

const FormInputOTPSlot = InputOTPSlot;

const FormInputOTPSeparator = InputOTPSeparator;

export {
  FormInputOTP,
  FormInputOTPGroup,
  FormInputOTPSlot,
  FormInputOTPSeparator,
};
