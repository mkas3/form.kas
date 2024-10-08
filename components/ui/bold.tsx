import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

type BoldProps = React.ComponentPropsWithoutRef<'strong'>;

const Bold = forwardRef<
  React.ElementRef<'strong'>,
  BoldProps
>(({ className, ...props }, ref) => {
  return <strong ref={ref} className={cn('font-bold', className)} {...props} />;
});
Bold.displayName = 'Bold';

export { Bold };
