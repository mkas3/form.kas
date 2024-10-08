'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormSwitch } from '@/components/shared/form/form-switch';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  darkTheme: z.boolean()
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
