'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useController } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, useFormField } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export type FormDatePickerTriggerProps = React.ComponentPropsWithoutRef<
  typeof Button
>;

export type FormDatePickerContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverContent
>;

export type FormDatePickerCalendarProps = React.ComponentPropsWithoutRef<
  typeof Calendar
>;

const FormDatePicker = Popover;

const FormDatePickerTrigger = ({
  variant,
  className,
  children,
  defaultValue = 'Select date',
  ...props
}: FormDatePickerTriggerProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });

  return (
    <PopoverTrigger asChild>
      <FormControl>
        <Button
          variant={variant ?? 'outline'}
          className={cn(
            'w-full pl-3 text-left font-normal',
            !field.value && 'text-muted-foreground',
            className
          )}
          {...props}
        >
          {children}
          {!children && (
            <>
              {field.value ? (
                format(field.value, 'PPP')
              ) : (
                <span>{defaultValue}</span>
              )}
              <CalendarIcon className='ml-auto size-4 opacity-50' />
            </>
          )}
        </Button>
      </FormControl>
    </PopoverTrigger>
  );
};

const FormDatePickerContent = ({
  className,
  ...props
}: FormDatePickerContentProps) => {
  return (
    <PopoverContent className={cn('w-auto p-0')} align='start' {...props} />
  );
};

export const FormDatePickerCalendar = ({
  ...props
}: FormDatePickerCalendarProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });

  return (
    <Calendar
      mode='single'
      selected={field.value}
      onSelect={field.onChange}
      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
      initialFocus
      {...props}
    />
  );
};

export { FormDatePicker, FormDatePickerTrigger, FormDatePickerContent };
