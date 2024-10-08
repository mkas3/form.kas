import type { Tabs } from '@/components/ui/tabs';

import { ComponentInstallationTabs } from '@/app/components/_components/component-installation-tabs';
import { Code } from '@/components/shared/code';
import { FileCode } from '@/components/shared/file-code';
import { Step, Steps, StepTitle } from '@/components/ui/steps';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ComponentInstallationProps = React.ComponentPropsWithoutRef<typeof Tabs> & {
  shadcnDependencies: string[];
  componentFileName: string;
  innerDependencies?: string[];
  devDependencies?: string[];
  dependencies?: string[];
  hasDefaultValueHook?: boolean;
  hasZodFormHook?: boolean;
};

export const ComponentInstallation = ({
  shadcnDependencies,
  componentFileName,
  innerDependencies,
  devDependencies,
  dependencies,
  hasDefaultValueHook,
  hasZodFormHook,
  ...props
}: ComponentInstallationProps) => {
  return (
    <Steps>
      <Step>
        <StepTitle>Install the following dependencies:</StepTitle>
        <ComponentInstallationTabs defaultValue='npm' {...props}>
          <TabsList>
            <TabsTrigger value='npm'>npm</TabsTrigger>
            <TabsTrigger value='yarn'>yarn</TabsTrigger>
            <TabsTrigger value='pnpm'>pnpm</TabsTrigger>
            <TabsTrigger value='bun'>bun</TabsTrigger>
          </TabsList>
          <TabsContent value='npm'>
            <Code lang='console'>
              npx shadcn-ui@latest add
              {shadcnDependencies.join(' ')}
            </Code>
            {dependencies
              ? (
                  <Code lang='console'>
                    npm install
                    {dependencies.join(' ')}
                  </Code>
                )
              : null}
            {devDependencies
              ? (
                  <Code lang='console'>
                    npm install
                    {devDependencies.join(' ')}
                    {' '}
                    --save-dev
                  </Code>
                )
              : null}
          </TabsContent>
          <TabsContent value='yarn'>
            <Code lang='console'>
              npx shadcn-ui@latest add
              {shadcnDependencies.join(' ')}
            </Code>
            {dependencies
              ? (
                  <Code lang='console'>
                    yarn add
                    {dependencies.join(' ')}
                  </Code>
                )
              : null}
            {devDependencies
              ? (
                  <Code lang='console'>
                    yarn add -D
                    {devDependencies.join(' ')}
                  </Code>
                )
              : null}
          </TabsContent>
          <TabsContent value='pnpm'>
            <Code lang='console'>
              pnpm dlx shadcn-ui@latest add
              {shadcnDependencies.join(' ')}
            </Code>
            {dependencies
              ? (
                  <Code lang='console'>
                    pnpm add
                    {dependencies.join(' ')}
                  </Code>
                )
              : null}
            {devDependencies
              ? (
                  <Code lang='console'>
                    pnpm add -D
                    {devDependencies.join(' ')}
                  </Code>
                )
              : null}
          </TabsContent>
          <TabsContent value='bun'>
            <Code lang='console'>
              bunx --bun shadcn-ui@latest add
              {' '}
              {shadcnDependencies.join(' ')}
            </Code>
            {dependencies
              ? (
                  <Code lang='console'>
                    bun add
                    {dependencies.join(' ')}
                  </Code>
                )
              : null}
            {devDependencies
              ? (
                  <Code lang='console'>
                    bun add -D
                    {devDependencies.join(' ')}
                  </Code>
                )
              : null}
          </TabsContent>
        </ComponentInstallationTabs>
      </Step>
      {hasDefaultValueHook
        ? (
            <Step>
              <StepTitle>Copy and paste the following hook code into your project.</StepTitle>
              <FileCode
                className='max-h-[50vh] overflow-y-auto'
                fileName='use-form-default-value.ts'
                folderNames={['hooks']}
              />
            </Step>
          )
        : null}
      {hasZodFormHook
        ? (
            <Step>
              <StepTitle>Copy and paste the following hook code into your project.</StepTitle>
              <FileCode
                className='max-h-[50vh] overflow-y-auto'
                fileName='use-zod-form.ts'
                folderNames={['hooks']}
              />
            </Step>
          )
        : null}
      <Step>
        <StepTitle>Copy and paste the following component code into your project.</StepTitle>
        <FileCode
          className='max-h-[50vh] overflow-y-auto'
          fileName={componentFileName}
          folderNames={['components', 'shared', 'form']}
        />
      </Step>
      {innerDependencies
        ? innerDependencies.map((item, index) => (
          <Step key={index}>
            <StepTitle>Copy and paste the following component code into your project.</StepTitle>
            <FileCode
              className='max-h-[50vh] overflow-y-auto'
              fileName={item}
              folderNames={['components', 'shared', 'form']}
            />
          </Step>
        ))
        : null}
      <Step>
        <StepTitle>Update the import paths to match your project setup.</StepTitle>
      </Step>
    </Steps>
  );
};
