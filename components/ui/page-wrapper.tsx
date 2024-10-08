import { cn } from '@/lib/utils';

type PageWrapperProps = React.ComponentPropsWithoutRef<'div'>;

export const PageWrapper = ({ className, ...props }: PageWrapperProps) => {
  return (
    <div className={cn('relative min-h-screen w-full p-6 md:max-w-[65vw]', className)} {...props} />
  );
};
