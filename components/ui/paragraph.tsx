import { cn } from '@/lib/utils';

type ParagraphProps = React.ComponentPropsWithoutRef<'p'>;

export const Paragraph = ({ className, ...props }: ParagraphProps) => {
  return <p className={cn('leading-7 [&:not(:first-of-type)]:mt-6', className)} {...props} />;
};
