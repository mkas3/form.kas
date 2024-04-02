import type { UrlObject } from 'url';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ComponentButtons } from '@/app/components/_components/component-buttons';

import { ComponentBreadcrumb } from './component-breadcrumb';

type ComponentProps = {
  heading: string;
  description: string;
  links: [{ heading: string; href: string | UrlObject }];
  children?: React.ReactNode;
};

export const Component = ({
  heading,
  description,
  links,
  children,
}: ComponentProps) => {
  return (
    <>
      <ComponentBreadcrumb className='mb-4' heading={heading} />
      <h1 className='mb-2 text-4xl font-bold tracking-tight'>{heading}</h1>
      <p className='mb-4 text-lg text-muted-foreground'>{description}</p>
      <div className='mb-12 flex gap-x-2'>
        {links.map((item, index) => (
          <Link
            key={index}
            className={badgeVariants({
              variant: 'secondary',
              className: 'gap-x-1',
            })}
            href={item.href}
            target='_blank'
            rel='noreferrer'
          >
            {item.heading}
            <ExternalLink className='size-3' />
          </Link>
        ))}
      </div>
      {children}
      <ComponentButtons heading={heading} />
    </>
  );
};
