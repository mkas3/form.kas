'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormSlider } from '@/components/shared/form/form-slider';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  priceRange: z.tuple([z.number(), z.number()])
});

type FormProps = z.infer<typeof formSchema>;

export const SliderExamplePrice = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(`Price range: ${data.priceRange[0]} - ${data.priceRange[1]}`);
  };

  return (
    <Form className='flex flex-col gap-y-4' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='priceRange'>
        <FormSlider defaultValue={[100, 500]} max={1000} min={0} step={10} />
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Apply Price Filter</Button>
    </Form>
  );
};
