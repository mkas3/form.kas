import React from 'react';

import { cn } from '@/lib/utils';

type ItalicProps = React.ComponentPropsWithoutRef<'em'>;

export const Italic = ({ className, ...props }: ItalicProps) => {
  return <em className={cn('italic', className)} {...props} />;
};
