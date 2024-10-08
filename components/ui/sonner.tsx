'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

import { cn } from '@/lib/utils';

type ToasterProps = React.ComponentPropsWithoutRef<typeof Sonner>;

const Toaster = ({ toastOptions, className, ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
        },
        ...toastOptions
      }}
      /* eslint-disable-next-line tailwindcss/no-custom-classname */
      className={cn('toaster group', className)}
      theme={theme as ToasterProps['theme']}
      {...props}
    />
  );
};

export { Toaster };
