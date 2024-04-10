'use client';

import { Bell } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { FormToggle } from '@/components/ui/form/form-toggle';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  hasNotifications: z.boolean(),
});

type FormProps = z.infer<typeof formSchema>;

export const ToggleExampleNotifications = () => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
    toast.success(JSON.stringify(data));
  };

  return (
    <Form className='flex flex-col gap-y-4' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='hasNotifications'>
        <div className='flex items-center gap-x-2'>
          <FormToggle id='notifications'>
            <Bell className='size-4' />
          </FormToggle>
          <Label htmlFor='notifications'>Notifications</Label>
        </div>
      </FormFieldItem>
      <Button className='w-fit' type='submit'>
        Apply Settings
      </Button>
    </Form>
  );
};
