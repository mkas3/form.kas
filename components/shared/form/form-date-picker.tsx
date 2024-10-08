'use client';

import React from 'react';
import { useController } from 'react-hook-form';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, useFormField } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export type FormDatePickerTriggerProps = React.ComponentPropsWithoutRef<typeof Button>;

export type FormDatePickerContentProps = React.ComponentPropsWithoutRef<typeof PopoverContent>;

export type FormDatePickerCalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>;

const FormDatePicker = Popover;

const FormDatePickerTrigger = ({
  variant,
  className,
  children,
  defaultValue = 'Select Date',
  ...props
}: FormDatePickerTriggerProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });

  return (
    <PopoverTrigger asChild>
      <FormControl>
        <Button
          className={cn(
            'flex w-fit px-6 text-left font-normal',
            !field.value && 'text-muted-foreground',
            className
          )}
          variant={variant ?? 'outline'}
          {...props}
        >
          {children}
          {!children && (
            <>
              {field.value ? (
                format(field.value, 'PPP', { locale: ru })
              ) : (
                <span>{defaultValue}</span>
              )}
              <CalendarIcon className='ml-4 size-4 opacity-50' />
            </>
          )}
        </Button>
      </FormControl>
    </PopoverTrigger>
  );
};

const FormDatePickerContent = ({ className, ...props }: FormDatePickerContentProps) => {
  return <PopoverContent align='start' className={cn('w-auto p-0')} {...props} />;
};

const FormDatePickerCalendar = ({ ...props }: FormDatePickerCalendarProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });

  return (
    <Calendar
      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
      locale={ru}
      mode='single'
      selected={field.value}
      initialFocus
      onSelect={field.onChange}
      {...props}
    />
  );
};

export { FormDatePicker, FormDatePickerCalendar, FormDatePickerContent, FormDatePickerTrigger };
