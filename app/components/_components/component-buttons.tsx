import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { HREFS_COMPONENTS_TITLES } from '@/data/href.constants';

type ComponentButtonsProps = React.ComponentPropsWithoutRef<'div'> & {
  heading: string;
};

export const ComponentButtons = ({ heading, ...props }: ComponentButtonsProps) => {
  const prev = HREFS_COMPONENTS_TITLES.at(
    HREFS_COMPONENTS_TITLES.findIndex((item) => item.heading === heading) - 1
  );
  const next = HREFS_COMPONENTS_TITLES.at(
    HREFS_COMPONENTS_TITLES.findIndex((item) => item.heading === heading) + 1
  );

  return (
    <div className='mt-12 flex items-center justify-between *:gap-x-2' {...props}>
      <Link className={buttonVariants({ variant: 'outline' })} href={prev?.href ?? ''}>
        <ChevronLeft className='size-5' />
        {prev?.heading}
      </Link>
      <Link className={buttonVariants({ variant: 'outline' })} href={next?.href ?? ''}>
        {next?.heading}
        <ChevronRight className='size-5' />
      </Link>
    </div>
  );
};
