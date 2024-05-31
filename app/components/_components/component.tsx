import type { UrlObject } from 'url';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { siteConfig } from '@/config/site';
import { badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Description } from '@/components/ui/description';
import { Heading } from '@/components/ui/heading';
import { ComponentButtons } from '@/app/components/_components/component-buttons';

import { ComponentBreadcrumb } from './component-breadcrumb';

type ComponentProps = {
  shortHeading: string;
  heading: string;
  description: string;
  links: { heading: string; href: string | UrlObject }[];
  children?: React.ReactNode;
};

export const Component = ({
  shortHeading,
  heading,
  description,
  links,
  children,
}: ComponentProps) => {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Components',
        item: `${siteConfig.url}/components`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: heading,
        item: `${siteConfig.url}/components/${shortHeading}`,
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComponentBreadcrumb className='mb-4' heading={heading} />
      <Heading className='mb-2' variant='h1'>
        {heading}
      </Heading>
      <Description className='mb-4'>{description}</Description>
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
