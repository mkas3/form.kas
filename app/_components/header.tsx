import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';

import { ThemeMenu } from './theme-menu';

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

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
        <div className='mr-4'>
          <Link
            className='font-mono text-base font-extrabold tracking-widest'
            href='/'
          >
            Form.kas
          </Link>
        </div>
        <ThemeMenu />
      </div>
    </header>
  );
};
