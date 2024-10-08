'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormInput } from '@/components/shared/form/form-input';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  search: z.string().min(1, { message: 'Please type text.' })
});

type FormProps = z.infer<typeof formSchema>;

export const InputExampleSearch = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='search'>
        <FormInput placeholder='Type to search...' />
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Search</Button>
    </Form>
  );
};
