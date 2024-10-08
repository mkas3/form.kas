import * as fs from 'node:fs';
import * as path from 'node:path';

import { Code } from '@/components/shared/code';

import { cn } from '@/lib/utils';

export type FileCodeProps = React.ComponentPropsWithoutRef<typeof Code> & {
  folderNames: string[];
  fileName: string;
};

const getComponentCode = (folderNames: string[], fileName: string) => {
  const filePath = path.join(...folderNames, fileName);

  return fs.readFileSync(filePath, 'utf-8');
};

export const FileCode = ({ folderNames, fileName, className, ...props }: FileCodeProps) => {
  const code = getComponentCode(folderNames, fileName);

  return (
    <Code className={cn('w-full', className)} lang='typescript' {...props}>
      {code}
    </Code>
  );
};
