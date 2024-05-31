import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type BoldProps = HTMLAttributes<HTMLElement>;

export const Bold = ({ className, ...props }: BoldProps) => {
  return <strong className={cn('font-bold', className)} {...props} />;
};
