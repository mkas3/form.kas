import type { GetCodeOptions } from '@/lib/utils';

import { cn, getCode } from '@/lib/utils';

import { CodeCopyButton } from './code-copy-button';

type CodeProps = GetCodeOptions &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & {
    children?: string | string[];
    disableCopy?: boolean;
  };

export const Code = async ({
  children,
  lang,
  decorations,
  disableCopy,
  className,
  ...props
}: CodeProps) => {
  const code = await getCode(children ?? '', { lang, decorations });

  return (
    <div className={cn('relative', className)}>
      <div
        className='overflow-auto rounded-xl border bg-code p-4 font-mono text-sm *:!bg-transparent'
        dangerouslySetInnerHTML={{ __html: code }}
        {...props}
      />
      <CodeCopyButton text={children} />
    </div>
  );
};
