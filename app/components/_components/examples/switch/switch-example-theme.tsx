'use client';

import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { FormSwitch } from '@/components/ui/form/form-switch';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  darkTheme: z.boolean(),
});

type FormProps = z.infer<typeof formSchema>;

export const SwitchExampleTheme = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  return (
    <Form className='flex flex-col gap-y-4' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='darkTheme'>
        <div className='flex items-center gap-x-2'>
          <FormSwitch id='dark-theme' />
          <Label htmlFor='dark-theme'>Dark Theme</Label>
        </div>
      </FormFieldItem>
      <Button className='w-fit' type='submit'>
        Apply Theme
      </Button>
    </Form>
  );
};
