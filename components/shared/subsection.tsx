import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';

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
      <Heading variant='h3'>{heading}</Heading>
      {children}
    </div>
  );
};
