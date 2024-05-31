'use client';

import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import {
  FormToggleGroup,
  FormToggleGroupItem,
} from '@/components/ui/form/form-toggle-group';

const formSchema = z.object({
  categories: z.array(z.string()),
});

type FormProps = z.infer<typeof formSchema>;

export const ToggleGroupExampleFilter = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(`Selected Categories: ${data.categories.join(', ')}`);
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='categories'>
        <FormToggleGroup type='multiple'>
          <FormToggleGroupItem value='pending'>Pending</FormToggleGroupItem>
          <FormToggleGroupItem value='shipped'>Shipped</FormToggleGroupItem>
          <FormToggleGroupItem value='downloaded'>
            Downloaded
          </FormToggleGroupItem>
        </FormToggleGroup>
      </FormFieldItem>
      <Button type='submit'>Apply Filters</Button>
    </Form>
  );
};
