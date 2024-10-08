import { SidebarContent } from '@/app/_components/sidebar-content';

type SidebarProps = React.ComponentPropsWithoutRef<'aside'>;

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <aside
      className='sticky left-0 top-header z-30 hidden h-[calc(100vh-var(--header))] w-fit text-sm text-muted-foreground md:block'
      {...props}
    >
      <SidebarContent />
    </aside>
  );
};
