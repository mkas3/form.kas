import React, { Fragment } from 'react';
import { HREFS_COMPONENTS_TITLES } from '@/data/href.constants';

import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SheetClose } from '@/components/ui/sheet';

type SidebarContentProps = React.ComponentPropsWithoutRef<typeof ScrollArea> & {
  forSheet?: boolean;
};

export const SidebarContent = ({
  className,
  forSheet,
  ...props
}: SidebarContentProps) => {
  const LinkWrapper = forSheet ? SheetClose : Fragment;

  return (
    <ScrollArea className={cn('h-full p-8 pb-4', className)} {...props}>
      <nav className='grid h-full min-w-max grid-flow-row auto-rows-max gap-2 pr-16 text-black/50 dark:text-white/50 [&_a]:text-sm [&_a]:font-medium'>
        <span className='mb-1 font-semibold text-foreground'>Start Work</span>
        <LinkWrapper {...(forSheet ? { asChild: true } : undefined)}>
          <Link href='/'>Introduction</Link>
        </LinkWrapper>
        <LinkWrapper {...(forSheet ? { asChild: true } : undefined)}>
          <Link href='/components'>Components</Link>
        </LinkWrapper>
        <span className='mb-1 mt-4 font-semibold text-foreground'>
          Components
        </span>
        {HREFS_COMPONENTS_TITLES.map((item, index) => (
          <LinkWrapper
            key={index}
            {...(forSheet ? { asChild: true } : undefined)}
          >
            <Link href={item.href}>{item.heading}</Link>
          </LinkWrapper>
        ))}
      </nav>
    </ScrollArea>
  );
};
