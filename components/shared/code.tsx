import { cn, getCode, GetCodeOptions } from '@/lib/utils';

import { CodeCopyButton } from './code-copy-button';

type CodeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
  GetCodeOptions & {
    children?: string;
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
    <div className='relative'>
      <div
        className={cn(
          'rounded-xl border bg-code p-4 font-mono text-sm *:!bg-transparent',
          className
        )}
        dangerouslySetInnerHTML={{ __html: code }}
        {...props}
      />
      <CodeCopyButton text={children} />
    </div>
  );
};
