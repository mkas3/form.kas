import React from 'react';

import type { FileCodeProps } from '@/components/shared/file-code';
import { FileCode } from '@/components/shared/file-code';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ExampleProps = Omit<FileCodeProps, 'children'> & {
  children?: React.ReactNode;
};

export const Example = ({ children, folderNames, fileName, ...props }: ExampleProps) => {
  return (
    <Tabs defaultValue='preview'>
      <TabsList>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='code'>Code</TabsTrigger>
      </TabsList>
      <TabsContent value='preview'>
        <div className='flex min-h-[50vh] w-full items-center justify-center rounded-xl border py-12'>
          {children}
        </div>
      </TabsContent>
      <TabsContent value='code'>
        <FileCode
          className='max-h-[50vh] overflow-y-auto'
          fileName={fileName}
          folderNames={folderNames}
          {...props}
        />
      </TabsContent>
    </Tabs>
  );
};
