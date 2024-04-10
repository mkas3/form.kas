import { cn } from '@/lib/utils';

type DescriptionProps = React.HTMLAttributes<HTMLDivElement>;

export const Description = ({ className, ...props }: DescriptionProps) => {
  return (
    <div
      className={cn('text-lg text-muted-foreground', className)}
      {...props}
    />
  );
};
