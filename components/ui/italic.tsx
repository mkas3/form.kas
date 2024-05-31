import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type ItalicProps = HTMLAttributes<HTMLElement>;

export const Italic = ({ className, ...props }: ItalicProps) => {
  return <em className={cn('italic', className)} {...props} />;
};
