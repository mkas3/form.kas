'use client';

import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import {
  FormDatePicker,
  FormDatePickerCalendar,
  FormDatePickerContent,
  FormDatePickerTrigger,
} from '@/components/ui/form/form-date-picker';
import { FormFieldItem } from '@/components/ui/form/form-field-item';

const formSchema = z.object({
  datePicker: z.date({
    errorMap: () => ({ message: 'Please select a date.' }),
  }),
});

type FormProps = z.infer<typeof formSchema>;

export const DatePickerExampleHotel = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(`Selected date: ${JSON.stringify(data)}`);
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='datePicker'>
        <FormDatePicker>
          <FormDatePickerTrigger defaultValue='Select Date' />
          <FormDatePickerContent>
            <FormDatePickerCalendar />
          </FormDatePickerContent>
        </FormDatePicker>
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Confirm Date</Button>
    </Form>
  );
};
