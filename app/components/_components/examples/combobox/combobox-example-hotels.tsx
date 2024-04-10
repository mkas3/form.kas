'use client';

import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import {
  FormCombobox,
  FormComboboxContent,
  FormComboboxEmpty,
  FormComboboxGroup,
  FormComboboxGroupItem,
  FormComboboxInput,
  FormComboboxList,
  FormComboboxTrigger,
} from '@/components/ui/form/form-combobox';
import { FormFieldItem } from '@/components/ui/form/form-field-item';

const cities = [
  { id: '1', name: 'New York' },
  { id: '2', name: 'Los Angeles' },
  { id: '3', name: 'Chicago' },
];

const formSchema = z.object({
  city: z.string({ errorMap: () => ({ message: 'Please select a city.' }) }),
});

type FormProps = z.infer<typeof formSchema>;

export const ComboboxExampleHotels = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='city'>
        <FormCombobox>
          <FormComboboxTrigger defaultValue='Select city' />
          <FormComboboxContent>
            <FormComboboxInput placeholder='Search...' />
            <FormComboboxList>
              <FormComboboxEmpty>No city found.</FormComboboxEmpty>
              <FormComboboxGroup>
                {cities.map((city) => (
                  <FormComboboxGroupItem key={city.id} value={city.name}>
                    {city.name}
                  </FormComboboxGroupItem>
                ))}
              </FormComboboxGroup>
            </FormComboboxList>
          </FormComboboxContent>
        </FormCombobox>
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Book Hotel</Button>
    </Form>
  );
};
