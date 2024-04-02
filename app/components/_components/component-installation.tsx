import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code } from '@/components/shared/code';
import { ComponentInstallationTabs } from '@/app/components/_components/component-installation-tabs';

type ComponentInstallationProps = React.ComponentPropsWithoutRef<typeof Tabs>;

export const ComponentInstallation = ({
  ...props
}: ComponentInstallationProps) => {
  return (
    <ComponentInstallationTabs defaultValue='npm' {...props}>
      <TabsList className='mb-6 flex h-fit justify-start rounded-none border-b bg-transparent py-0'>
        <TabsTrigger
          className='w-fit rounded-none border-b-2 border-transparent bg-transparent transition-colors hover:bg-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent'
          value='npm'
        >
          npm
        </TabsTrigger>
        <TabsTrigger
          className='w-fit rounded-none border-b-2 border-transparent bg-transparent transition-colors hover:bg-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent'
          value='yarn'
        >
          yarn
        </TabsTrigger>
        <TabsTrigger
          className='w-fit rounded-none border-b-2 border-transparent bg-transparent transition-colors hover:bg-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent'
          value='pnpm'
        >
          pnpm
        </TabsTrigger>
        <TabsTrigger
          className='w-fit rounded-none border-b-2 border-transparent bg-transparent transition-colors hover:bg-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent'
          value='bun'
        >
          bun
        </TabsTrigger>
        <TabsTrigger
          className='w-fit rounded-none border-b-2 border-transparent bg-transparent transition-colors hover:bg-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent'
          value='manual'
        >
          Manual
        </TabsTrigger>
      </TabsList>
      <TabsContent value='npm'>
        <Code lang='console'>npx shadcn-ui@latest add tabs</Code>
      </TabsContent>
      <TabsContent value='yarn'>
        <Code lang='console'>npx shadcn-ui@latest add tabs</Code>
      </TabsContent>
      <TabsContent value='pnpm'>
        <Code lang='console'>pnpm dlx shadcn-ui@latest add radio-group</Code>
      </TabsContent>
      <TabsContent value='bun'>
        <Code lang='console'>bunx --bun shadcn-ui@latest add tabs</Code>
      </TabsContent>
      <TabsContent value='manual'>
        <Code lang='console'>pnpm dlx shadcn-ui@latest add radio-group</Code>
      </TabsContent>
    </ComponentInstallationTabs>
  );
};
