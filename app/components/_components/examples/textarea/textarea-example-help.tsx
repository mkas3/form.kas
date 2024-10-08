'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormTextarea } from '@/components/shared/form/form-textarea';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  problem: z.string().min(1, { message: 'Please type problem.' })
});

type FormProps = z.infer<typeof formSchema>;

export const TextareaExampleHelp = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='problem'>
        <FormTextarea placeholder='Describe problem...' />
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Send</Button>
    </Form>
  );
};
