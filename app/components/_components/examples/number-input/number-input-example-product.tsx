'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormNumberInput } from '@/components/shared/form/form-number-input';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  quantity: z
    .number({ errorMap: () => ({ message: 'Must select at least one item.' }) })
    .min(1, 'Must select at least one item.')
});

type FormProps = z.infer<typeof formSchema>;

export const NumberInputExampleProduct = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(`Order submitted with quantity: ${data.quantity}`);
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='quantity'>
        <FormNumberInput
          allowNegative={false}
          decimalScale={0}
          placeholder='Enter quantity'
          thousandSeparator={false}
          isNumericValue
        />
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Place Order</Button>
    </Form>
  );
};
