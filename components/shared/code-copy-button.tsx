'use client';

import type React from 'react';

import { useEffect, useState } from 'react';

import { Check, Copy } from 'lucide-react';

import { Button } from '../ui/button';

type CodeCopyButtonProps = React.ComponentPropsWithoutRef<typeof Button> & {
  text?: string | string[];
};

export const CodeCopyButton = ({ text, ...props }: CodeCopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    if (!text) return;
    const stringText = typeof text === 'string' ? text : text.join('');
    await navigator.clipboard.writeText(stringText);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [copied]);

  return (
    <Button
      className='absolute right-4 top-4 size-6 p-1.5'
      size='icon'
      variant='secondary'
      onClick={handleCopyClick}
      {...props}
    >
      {copied ? <Check className='w-full' /> : <Copy className='w-full' />}
    </Button>
  );
};
