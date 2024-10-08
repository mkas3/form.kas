'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import {
  FormSelect,
  FormSelectContent,
  FormSelectGroup,
  FormSelectItem,
  FormSelectLabel,
  FormSelectTrigger,
  FormSelectValue
} from '@/components/shared/form/form-select';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  visaType: z.enum(['tourist', 'business', 'student'], {
    errorMap: () => ({ message: 'Please select type of Visa.' })
  })
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
