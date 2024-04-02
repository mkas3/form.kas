import { cn } from '@/lib/utils';

type SubsectionProps = React.HTMLAttributes<HTMLDivElement> & {
  heading: string;
};

export const Subsection = ({
  heading,
  className,
  children,
  ...props
}: SubsectionProps) => {
  return (
    <div className={cn('flex flex-col gap-y-6', className)} {...props}>
      <h3 className='font-heading text-xl font-semibold tracking-tight'>
        {heading}
      </h3>
      {children}
    </div>
  );
};
