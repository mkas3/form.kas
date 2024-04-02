import type React from 'react';

import fs from 'fs';
import path from 'path';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code } from '@/components/shared/code';

type ExampleProps = {
  component: React.ReactNode;
  folderName: string;
  fileName: string;
};

const getComponentCode = (folderName: string, fileName: string) => {
  const filePath = path.join(
    'app',
    'components',
    '_components',
    'examples',
    folderName,
    fileName
  );
  const file = fs.readFileSync(filePath, 'utf-8');

  return file;
};

export const Example = async ({
  component,
  folderName,
  fileName,
  ...props
}: ExampleProps) => {
  const code = getComponentCode(folderName, fileName);

  return (
    <Tabs defaultValue='preview' {...props}>
      <TabsList className='mb-6 flex h-fit justify-start rounded-none border-b bg-transparent py-0'>
        <TabsTrigger
          className='w-fit rounded-none border-b-2 border-transparent bg-transparent transition-colors hover:bg-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent'
          value='preview'
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          className='w-fit rounded-none border-b-2 border-transparent bg-transparent transition-colors hover:bg-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent'
          value='code'
        >
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value='preview'>
        <div className='flex min-h-[50vh] w-full items-center justify-center rounded-xl border py-12'>
          {component}
        </div>
      </TabsContent>
      <TabsContent value='code'>
        <Code className='max-h-[50vh] w-full overflow-y-auto'>{code}</Code>
      </TabsContent>
    </Tabs>
  );
};
