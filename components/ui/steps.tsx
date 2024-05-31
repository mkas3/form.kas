import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const Steps = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ml-4 flex flex-col gap-y-8 border-l pl-8 [counter-reset:step]',
          className
        )}
        {...props}
      />
    );
  }
);
Steps.displayName = 'Steps';

const Step = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative [counter-increment:step] before:absolute before:-mt-1 before:ml-[-3.125rem] before:inline-flex before:size-9 before:items-center before:justify-center before:rounded-full before:border-4 before:border-background before:bg-muted before:-indent-px before:font-mono before:text-base before:content-[counter(step)]',
          className
        )}
        {...props}
      />
    );
  }
);
Step.displayName = 'Step';

const StepTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('mb-4 text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
});
StepTitle.displayName = 'StepTitle';

export { Steps, Step, StepTitle };
