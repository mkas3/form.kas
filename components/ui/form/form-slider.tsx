'use client';

import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { useFormField } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';

const FormSlider = forwardRef<
  React.ElementRef<typeof Slider>,
  React.ComponentPropsWithoutRef<typeof Slider>
>(({ defaultValue = [50], ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <Slider
      {...field}
      ref={ref}
      value={field.value ?? defaultValue}
      onValueChange={field.onChange}
      max={100}
      step={1}
      {...props}
    />
  );
});
FormSlider.displayName = Slider.displayName;

export { FormSlider };
