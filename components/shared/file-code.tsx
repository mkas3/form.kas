import fs from 'fs';
import path from 'path';

import { cn } from '@/lib/utils';
import { Code } from '@/components/shared/code';

export type FileCodeProps = React.ComponentPropsWithoutRef<typeof Code> & {
  folderNames: string[];
  fileName: string;
};

const getComponentCode = (folderNames: string[], fileName: string) => {
  const filePath = path.join(...folderNames, fileName);
  const file = fs.readFileSync(filePath, 'utf-8');

  return file;
};

export const FileCode = ({
  folderNames,
  fileName,
  className,
  ...props
}: FileCodeProps) => {
  const code = getComponentCode(folderNames, fileName);

  return (
    <Code className={cn('w-full', className)} {...props}>
      {code}
    </Code>
  );
};
