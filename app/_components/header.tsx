import React from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { BurgerMenu } from '@/app/_components/burger-menu';
import { SearchButton } from '@/app/_components/search-button';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Logo } from '@/components/ui/logo';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { ThemeMenu } from './theme-menu';

type HeaderProps = React.ComponentPropsWithoutRef<'header'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-header w-full items-center border-b backdrop-blur',
        className
      )}
      {...props}
    >
      <div className='container flex h-14 max-w-screen-2xl items-center justify-between'>
        <Link
          className='flex items-center gap-x-2 font-mono text-base font-extrabold tracking-widest'
          href='/'
        >
          <Logo className='hidden sm:block' />
          {siteConfig.name}
        </Link>
        <div className='flex gap-x-2'>
          <SearchButton />
          <Link
            className={cn(buttonVariants({ variant: 'ghost' }), 'aspect-square w-auto p-0')}
            href={siteConfig.links.githubProject}
          >
            <GitHubLogoIcon />
            <span className='sr-only'>form.xerase Github link</span>
          </Link>
          <ThemeMenu />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
