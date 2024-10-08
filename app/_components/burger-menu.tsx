import { SidebarContent } from '@/app/_components/sidebar-content';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import { Menu } from 'lucide-react';

type BurgerMenuProps = React.ComponentPropsWithoutRef<typeof Sheet>;

export const BurgerMenu = ({ ...props }: BurgerMenuProps) => {
  return (
    <Sheet {...props}>
      <SheetTrigger asChild>
        <Button className='flex aspect-square w-auto p-0 sm:hidden' variant='ghost'>
          <Menu />
          <span className='sr-only'>Navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col items-start justify-center text-sm text-muted-foreground'>
        <SheetHeader className='px-8 pt-4'>
          <SheetTitle className='flex items-center gap-x-2 font-mono text-base font-extrabold tracking-widest'>
            <Logo />
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>
        <SidebarContent className='h-[90dvh]' forSheet />
      </SheetContent>
    </Sheet>
  );
};
