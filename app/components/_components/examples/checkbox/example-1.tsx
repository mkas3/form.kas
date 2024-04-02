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
import { Label } from '@/components/ui/label';
import { Form } from '@/components/shared/form/form';
import { FormCheckbox } from '@/components/shared/form/form-checkbox';
import { FormFieldControl } from '@/components/shared/form/form-field-control';

const formSchema = z.object({
  username: z.any().nullish(),
});

type FormProps = z.infer<typeof formSchema>;

export const CheckboxExample1 = () => {
  const form = useZodForm(formSchema);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast(JSON.stringify(values));
  };

  return (
    <Form className='space-y-8' form={form} onSubmit={onSubmit}>
      <FormFieldControl<FormProps> name='username'>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <div className='flex items-center gap-x-2'>
            <FormCheckbox id='agree' />
            <Label htmlFor='agree'>Agree</Label>
          </div>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormFieldControl>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};
