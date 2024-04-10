import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

const headingVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold tracking-tight',
      h2: 'text-2xl font-semibold tracking-tight',
      h3: 'text-xl font-semibold tracking-tight',
    },
  },
});

export const Heading = ({ variant, className, ...props }: HeadingProps) => {
  const Comp = variant ?? 'h1';

  return (
    <Comp className={cn(headingVariants({ variant, className }))} {...props} />
  );
};
