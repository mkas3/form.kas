import React from 'react';

import { cn } from '@/lib/utils';

type BoldProps = React.ComponentPropsWithoutRef<'strong'>;

export const Bold = ({ className, ...props }: BoldProps) => {
  return <strong className={cn('font-bold', className)} {...props} />;
};
