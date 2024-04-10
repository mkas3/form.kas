'use client';

import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormCheckbox } from '@/components/ui/form/form-checkbox';
import { FormFieldControl } from '@/components/ui/form/form-field-control';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  sidebar: z.object({
    recents: z.boolean(),
    home: z.boolean(),
    applications: z.boolean(),
  }),
});

type FormProps = z.infer<typeof formSchema>;

export const CheckboxExample1 = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (values: FormProps) => {
    toast(JSON.stringify(values));
  };

  return (
    <Form className='space-y-8' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='sidebar'>
        <div className='mb-4'>
          <FormLabel>Sidebar</FormLabel>
          <FormDescription>
            Select the items you want to display in the sidebar.
          </FormDescription>
        </div>
        <FormFieldControl<FormProps> name='sidebar.applications'>
          <FormItem className='flex items-center gap-x-2'>
            <FormCheckbox id='recents' defaultChecked={true} />
            <Label htmlFor='recents'>Recents</Label>
          </FormItem>
        </FormFieldControl>
        <FormFieldControl<FormProps> name='sidebar.applications'>
          <FormItem className='flex items-center gap-x-2'>
            <FormCheckbox id='home' />
            <Label htmlFor='home'>Home</Label>
          </FormItem>
        </FormFieldControl>
        <FormFieldControl<FormProps> name='sidebar.applications'>
          <FormItem className='flex items-center gap-x-2'>
            <FormCheckbox id='agree' />
            <Label htmlFor='agree'>Applications</Label>
          </FormItem>
        </FormFieldControl>
        <FormMessage />
      </FormFieldItem>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};
