import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { Section } from '@/components/shared/section';

export const metadata: Metadata = {
  title: 'Form Field',
  description: 'Wrapper over the shadcn/ui FormField to simplify working with it.'
};

export default function FieldPage() {
  return (
    <Component
      description='Wrapper over the shadcn/ui FormField to simplify working with it.'
      heading='Form Field'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/form'
        },
        {
          heading: 'Docs',
          href: 'https://react-hook-form.com/'
        }
      ]}
      shortHeading='field'
    >
      <Section heading='Installation'>
        <ComponentInstallation componentFileName='form-field.tsx' shadcnDependencies={['form']} />
      </Section>
    </Component>
  );
}
