import type { VariantProps } from 'class-variance-authority';

import { forwardRef } from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingVariants = cva('tracking-tight', {
  variants: {
    as: {
      h1: 'text-4xl font-bold',
      h2: 'text-2xl font-semibold',
      h3: 'text-xl font-semibold'
    }
  },
  defaultVariants: {
    as: 'h1'
  }
});

const Heading = forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h1'> & VariantProps<typeof headingVariants>
>(({ as, className, ...props }, ref) => {
  const Comp = as ?? 'h1';

  return <Comp ref={ref} className={cn(headingVariants({ as, className }))} {...props} />;
});
Heading.displayName = 'Heading';

export { Heading };
