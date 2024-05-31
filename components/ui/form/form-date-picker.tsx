'use client';

import React, { forwardRef } from 'react';
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

const FormDatePicker = Popover;

const FormDatePickerTrigger = forwardRef<
  React.ElementRef<typeof PopoverTrigger>,
  React.ComponentPropsWithoutRef<typeof Button>
>(
  (
    { variant, className, children, defaultValue = 'Select Date', ...props },
    ref
  ) => {
    const { name } = useFormField();
    const { field } = useController({
      name,
    });

    return (
      <PopoverTrigger ref={ref} asChild>
        <FormControl>
          <Button
            variant={variant ?? 'outline'}
            className={cn(
              'w-full gap-x-4 pl-3 text-left font-normal',
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
  }
);
FormDatePickerTrigger.displayName = PopoverTrigger.displayName;

const FormDatePickerContent = forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent>
>(({ className, ...props }, ref) => {
  return (
    <PopoverContent
      ref={ref}
      className={cn('w-auto p-0', className)}
      align='start'
      {...props}
    />
  );
});
FormDatePickerContent.displayName = PopoverContent.displayName;

export const FormDatePickerCalendar = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Calendar>) => {
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
