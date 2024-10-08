'use client';

import { Form } from '@/components/shared/form/form';
import { FormFieldItem } from '@/components/shared/form/form-field-item';
import { FormToggle } from '@/components/shared/form/form-toggle';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useZodForm } from '@/hooks/use-zod-form';
import { Bell } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  hasNotifications: z.boolean()
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
