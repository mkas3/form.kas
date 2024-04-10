'use client';

import { useState } from 'react';
import { HREFS_COMPONENTS_TITLES } from '@/data/href.constants';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Link } from '@/components/ui/link';

type SearchButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

export const SearchButton = ({ className, ...props }: SearchButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className={cn(
          'w-fit justify-between p-0 sm:w-48 sm:border sm:border-input sm:bg-background sm:hover:bg-accent sm:hover:text-accent-foreground',
          className
        )}
        variant='ghost'
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className='hidden px-4 text-muted-foreground sm:inline'>
          Search...
        </span>
        <span className='flex aspect-square h-full scale-125 items-center justify-center text-accent-foreground sm:scale-100 sm:bg-accent'>
          <MagnifyingGlassIcon />
        </span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search...' />
        <CommandList className='[&_a]:hover:no-underline'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Start Work'>
            <CommandItem asChild>
              <Link href='/' onClick={() => setOpen(false)}>
                Introduction
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href='/components' onClick={() => setOpen(false)}>
                Components
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading='Components'>
            {HREFS_COMPONENTS_TITLES.map((item, index) => (
              <CommandItem key={index} asChild>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.heading}
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
