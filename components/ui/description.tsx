import React from 'react';

import { cn } from '@/lib/utils';

type DescriptionProps = React.ComponentPropsWithoutRef<'div'>;

export const Description = ({ className, ...props }: DescriptionProps) => {
  return <div className={cn('text-lg text-muted-foreground', className)} {...props} />;
};
