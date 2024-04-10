'use client';

import { toast } from 'sonner';
import { z } from 'zod';

import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import {
  FormRadioGroup,
  FormRadioGroupItem,
} from '@/components/ui/form/form-radio-group';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  learningStyle: z.enum(['option-one', 'option-two']),
});

type FormProps = z.infer<typeof formSchema>;

export const RadioGroupExampleQuiz = () => {
  const form = useZodForm(formSchema, {
    defaultValues: {
      learningStyle: 'option-one',
    },
  });

  const handleSubmit = (data: FormProps) => {
    toast.success(`Selected learning style: ${data.learningStyle}`);
  };

  return (
    <Form className='flex flex-col gap-y-2' form={form} onSubmit={handleSubmit}>
      <FormFieldItem<FormProps> name='learningStyle'>
        <FormRadioGroup>
          <div className='flex items-center space-x-2'>
            <FormRadioGroupItem value='option-one' id='option-one' />
            <Label htmlFor='option-one'>Option One</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <FormRadioGroupItem value='option-two' id='option-two' />
            <Label htmlFor='option-two'>Option Two</Label>
          </div>
        </FormRadioGroup>
      </FormFieldItem>
      <Button className='mt-2' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
