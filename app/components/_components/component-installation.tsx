import { Step, Steps, StepTitle } from '@/components/ui/steps';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code } from '@/components/shared/code';
import { FileCode } from '@/components/shared/file-code';
import { ComponentInstallationTabs } from '@/app/components/_components/component-installation-tabs';

type ComponentInstallationProps = React.ComponentPropsWithoutRef<
  typeof Tabs
> & {
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
              npx shadcn-ui@latest add {shadcnDependencies.join(' ')}
            </Code>
            {dependencies && (
              <Code lang='console'>npm install {dependencies.join(' ')}</Code>
            )}
            {devDependencies && (
              <Code lang='console'>
                npm install {devDependencies.join(' ')} --save-dev
              </Code>
            )}
          </TabsContent>
          <TabsContent value='yarn'>
            <Code lang='console'>
              npx shadcn-ui@latest add {shadcnDependencies.join(' ')}
            </Code>
            {dependencies && (
              <Code lang='console'>yarn add {dependencies.join(' ')}</Code>
            )}
            {devDependencies && (
              <Code lang='console'>
                yarn add -D {devDependencies.join(' ')}
              </Code>
            )}
          </TabsContent>
          <TabsContent value='pnpm'>
            <Code lang='console'>
              pnpm dlx shadcn-ui@latest add {shadcnDependencies.join(' ')}
            </Code>
            {dependencies && (
              <Code lang='console'>pnpm add {dependencies.join(' ')}</Code>
            )}
            {devDependencies && (
              <Code lang='console'>
                pnpm add -D {devDependencies.join(' ')}
              </Code>
            )}
          </TabsContent>
          <TabsContent value='bun'>
            <Code lang='console'>
              bunx --bun shadcn-ui@latest add {shadcnDependencies.join(' ')}
            </Code>
            {dependencies && (
              <Code lang='console'>bun add {dependencies.join(' ')}</Code>
            )}
            {devDependencies && (
              <Code lang='console'>bun add -D {devDependencies.join(' ')}</Code>
            )}
          </TabsContent>
        </ComponentInstallationTabs>
      </Step>
      {hasDefaultValueHook && (
        <Step>
          <StepTitle>
            Copy and paste the following hook code into your project.
          </StepTitle>
          <FileCode
            className='max-h-[50vh] overflow-y-auto'
            folderNames={['hooks']}
            fileName='use-form-default-value.ts'
          />
        </Step>
      )}
      {hasZodFormHook && (
        <Step>
          <StepTitle>
            Copy and paste the following hook code into your project.
          </StepTitle>
          <FileCode
            className='max-h-[50vh] overflow-y-auto'
            folderNames={['hooks']}
            fileName='use-zod-form.ts'
          />
        </Step>
      )}
      <Step>
        <StepTitle>
          Copy and paste the following component code into your project.
        </StepTitle>
        <FileCode
          className='max-h-[50vh] overflow-y-auto'
          folderNames={['components', 'ui', 'form']}
          fileName={componentFileName}
        />
      </Step>
      {innerDependencies &&
        innerDependencies.map((item, index) => (
          <Step key={index}>
            <StepTitle>
              Copy and paste the following component code into your project.
            </StepTitle>
            <FileCode
              className='max-h-[50vh] overflow-y-auto'
              folderNames={['components', 'ui', 'form']}
              fileName={item}
            />
          </Step>
        ))}
      <Step>
        <StepTitle>
          Update the import paths to match your project setup.
        </StepTitle>
      </Step>
    </Steps>
  );
};
