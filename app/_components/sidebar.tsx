import { HREFS_COMPONENTS_TITLES } from '@/data/href.constants';

import { Link } from '@/components/ui/link';
import { ScrollArea } from '@/components/ui/scroll-area';

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <aside
      className='sticky left-0 top-header z-30 h-[calc(100vh-var(--header))] w-fit text-sm text-muted-foreground'
      {...props}
    >
      <ScrollArea className='h-full p-8 pb-4'>
        <div className='grid h-full min-w-max grid-flow-row auto-rows-max gap-2 pr-16'>
          <h4 className='mb-1 font-semibold text-foreground'>Начало работы</h4>
          <Link href='/introduction'>Введение</Link>
          <Link href='/installation'>Установка</Link>
          <Link href='/components'>Компоненты</Link>

          <h4 className='mb-1 mt-4 font-semibold text-foreground'>
            Компоненты
          </h4>
          {HREFS_COMPONENTS_TITLES.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.heading}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
