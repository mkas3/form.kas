'use client';

import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import {
  FormSelect,
  FormSelectContent,
  FormSelectGroup,
  FormSelectItem,
  FormSelectLabel,
  FormSelectTrigger,
  FormSelectValue,
} from '@/components/ui/form/form-select';

const formSchema = z.object({
  visaType: z.enum(['tourist', 'business', 'student'], {
    errorMap: () => ({ message: 'Please select type of Visa.' }),
  }),
});

type FormProps = z.infer<typeof formSchema>;

export const SelectExampleVisa = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(`Visa type selected: ${data.visaType}`);
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='visaType'>
        <FormSelect>
          <FormSelectTrigger>
            <FormSelectValue placeholder='Select…' />
          </FormSelectTrigger>
          <FormSelectContent>
            <FormSelectGroup>
              <FormSelectLabel>Visa Options</FormSelectLabel>
              <FormSelectItem value='tourist'>Tourist Visa</FormSelectItem>
              <FormSelectItem value='business'>Business Visa</FormSelectItem>
              <FormSelectItem value='student'>Student Visa</FormSelectItem>
            </FormSelectGroup>
          </FormSelectContent>
        </FormSelect>
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Apply for Visa</Button>
    </Form>
  );
};
