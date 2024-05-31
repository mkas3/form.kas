'use client';

import type { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

import React, { forwardRef } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useController } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { FormControl, useFormField } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const FormCombobox = Popover;

const FormComboboxTrigger = forwardRef<
  React.ElementRef<typeof PopoverTrigger>,
  React.ComponentPropsWithoutRef<typeof Button> &
    VariantProps<typeof buttonVariants>
>(
  (
    { variant, className, children, defaultValue = 'Select option', ...props },
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
            role='combobox'
            className={cn(
              'w-full justify-between gap-x-2',
              !field.value && 'text-muted-foreground',
              className
            )}
            {...props}
          >
            {children}
            {!children && (
              <>
                <span>{field.value ?? defaultValue}</span>
                <CaretSortIcon className='ml-2 size-4 shrink-0 opacity-50' />
              </>
            )}
          </Button>
        </FormControl>
      </PopoverTrigger>
    );
  }
);
FormComboboxTrigger.displayName = PopoverTrigger.displayName;

const FormComboboxContent = forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent>
>(({ children, ...props }, ref) => {
  return (
    <PopoverContent ref={ref} {...props}>
      <Command>{children}</Command>
    </PopoverContent>
  );
});
FormComboboxContent.displayName = Command.displayName;

const FormComboboxInput = CommandInput;

const FormComboboxList = CommandList;

const FormComboboxEmpty = CommandEmpty;

const FormComboboxGroup = CommandGroup;

const FormComboboxGroupItem = forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ value, children, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });

  return (
    <CommandItem ref={ref} onSelect={() => field.onChange(value)} {...props}>
      {children}
      <CheckIcon
        className={cn(
          'ml-auto size-4',
          field.value === value ? 'opacity-100' : 'opacity-0'
        )}
      />
    </CommandItem>
  );
});
FormComboboxGroupItem.displayName = CommandItem.displayName;

export {
  FormCombobox,
  FormComboboxTrigger,
  FormComboboxContent,
  FormComboboxInput,
  FormComboboxList,
  FormComboboxEmpty,
  FormComboboxGroup,
  FormComboboxGroupItem,
};
