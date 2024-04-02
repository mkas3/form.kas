'use client';

import { useController } from 'react-hook-form';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { useFormField } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';

type FormSliderProps = React.ComponentPropsWithoutRef<typeof Slider>;

export const FormSlider = ({
  defaultValue = [50],
  ...props
}: FormSliderProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <Slider
      {...field}
      value={field.value ?? defaultValue}
      onValueChange={field.onChange}
      max={100}
      step={1}
      {...props}
    />
  );
};
