import type { ClassValue } from 'clsx';
import type { BundledLanguage } from 'shiki';

import { clsx } from 'clsx';
import { codeToHtml } from 'shiki';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type GetCodeOptions = Omit<
  Parameters<typeof codeToHtml>[1],
  'lang' | 'theme' | 'themes'
> &
  Pick<Partial<Parameters<typeof codeToHtml>[1]>, 'lang'>;

export function getCode(code: string, options?: GetCodeOptions) {
  const { lang, ...otherOptions } = options ?? {};
  return codeToHtml(code, {
    lang: lang ?? 'tsx',
    theme: 'github-dark-default',
    ...otherOptions,
  });
}
