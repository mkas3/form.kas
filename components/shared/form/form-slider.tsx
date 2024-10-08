'use client';

import { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { useFormField } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

const DEFAULT_VALUE = [50];

const FormSlider = forwardRef<
  React.ElementRef<typeof Slider>,
  React.ComponentPropsWithoutRef<typeof Slider>
>(({ defaultValue = DEFAULT_VALUE, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <Slider
      {...field}
      ref={ref}
      max={100}
      step={1}
      value={field.value ?? defaultValue}
      onValueChange={field.onChange}
      {...props}
    />
  );
});
FormSlider.displayName = Slider.displayName;

export { FormSlider };
