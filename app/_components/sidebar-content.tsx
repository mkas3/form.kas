import React from 'react';
import { HREFS_COMPONENTS_TITLES } from '@/data/href.constants';

import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';
import { ScrollArea } from '@/components/ui/scroll-area';

type SidebarContentProps = React.ComponentPropsWithoutRef<typeof ScrollArea>;

export const SidebarContent = ({
  className,
  ...props
}: SidebarContentProps) => {
  return (
    <ScrollArea className={cn('h-full p-8 pb-4', className)} {...props}>
      <div className='grid h-full min-w-max grid-flow-row auto-rows-max gap-2 pr-16 [&_a]:text-sm [&_a]:font-medium'>
        <span className='mb-1 font-semibold text-foreground'>Start Work</span>
        <Link href='/'>Introduction</Link>
        <Link href='/components'>Components</Link>
        <span className='mb-1 mt-4 font-semibold text-foreground'>
          Components
        </span>
        {HREFS_COMPONENTS_TITLES.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.heading}
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
};
