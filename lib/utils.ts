import type { ClassValue } from 'clsx';
import type { CodeToHastOptions } from 'shiki';

import { clsx } from 'clsx';
import { codeToHtml } from 'shiki';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type GetCodeOptions = Omit<
  CodeToHastOptions,
  'lang' | 'theme' | 'themes'
> &
  Pick<Partial<CodeToHastOptions>, 'lang'>;

export function getCode(code: string | string[], options?: GetCodeOptions) {
  const { lang, ...otherOptions } = options ?? {};

  const stringCode = typeof code === 'string' ? code : code.join('');

  return codeToHtml(stringCode, {
    lang: lang ?? 'tsx',
    theme: 'github-dark-default',
    ...otherOptions,
  });
}
