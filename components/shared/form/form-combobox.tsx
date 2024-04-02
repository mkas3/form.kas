'use client';

import type { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

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

export type FormComboboxTriggerProps = React.ComponentPropsWithoutRef<
  typeof Button
> &
  VariantProps<typeof buttonVariants>;

export type FormComboboxContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverContent
>;

const FormCombobox = Popover;

const FormComboboxTrigger = ({
  variant,
  className,
  children,
  defaultValue = 'Select option',
  ...props
}: FormComboboxTriggerProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });

  return (
    <PopoverTrigger asChild>
      <FormControl>
        <Button
          variant={variant ?? 'outline'}
          role='combobox'
          className={cn(
            'w-full justify-between',
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
};

const FormComboboxContent = ({
  children,
  ...props
}: FormComboboxContentProps) => {
  return (
    <PopoverContent {...props}>
      <Command>{children}</Command>
    </PopoverContent>
  );
};

const FormComboboxInput = CommandInput;

const FormComboboxList = CommandList;

const FormComboboxEmpty = CommandEmpty;

const FormComboboxGroup = CommandGroup;

const FormComboboxGroupItem = ({
  value,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandItem>) => {
  const { name } = useFormField();
  const { field } = useController({
    name,
  });

  return (
    <CommandItem onSelect={() => field.onChange(value)} {...props}>
      {children}
      <CheckIcon
        className={cn(
          'ml-auto size-4',
          field.value === value ? 'opacity-100' : 'opacity-0'
        )}
      />
    </CommandItem>
  );
};

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
