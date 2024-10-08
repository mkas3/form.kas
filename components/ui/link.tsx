'use client';

import { forwardRef, useMemo } from 'react';

import LinkPrimitive from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const Link = forwardRef<
  React.ElementRef<typeof LinkPrimitive>,
  Omit<React.ComponentPropsWithoutRef<typeof LinkPrimitive>, 'href'> & {
    href: string;
    underline?: boolean;
    maxActiveDepth?: number;
  }
>(({ underline, className, maxActiveDepth = Infinity, href, ...props }, ref) => {
  const pathname = usePathname();

  const isActive = useMemo(
    () =>
      pathname && href === '/'
        ? pathname === href
        : pathname.split('/').length - 1 <= maxActiveDepth
          ? pathname.startsWith(href as string)
          : false,
    [pathname, href, maxActiveDepth]
  );

  return (
    <LinkPrimitive
      ref={ref}
      className={cn(
        'whitespace-nowrap text-[0.9em] underline-offset-4 ring-offset-background transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-foreground',
        underline && 'underline',
        className
      )}
      data-active={isActive}
      href={href}
      {...props}
    />
  );
});
Link.displayName = 'Link';

export { Link };
