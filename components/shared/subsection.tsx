import React from 'react';

import { Heading } from '@/components/ui/heading';
import { cn } from '@/lib/utils';

type SubsectionProps = React.ComponentPropsWithoutRef<'div'> & {
  heading: string;
};

export const Subsection = ({ heading, className, children, ...props }: SubsectionProps) => {
  return (
    <div className={cn('flex flex-col gap-y-6', className)} {...props}>
      <Heading as='h3'>{heading}</Heading>
      {children}
    </div>
  );
};
