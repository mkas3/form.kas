import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Form Field Control',
  description: `Wrapper over ${siteConfig.name} FormField with the passed control.`
};

export default function FieldControlPage() {
  return (
    <Component
      description={`Wrapper over ${siteConfig.name} FormField with the passed control.`}
      heading='Form Field Control'
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
      shortHeading='field-control'
    >
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-field-control.tsx'
          innerDependencies={['form-field.tsx']}
          shadcnDependencies={['form']}
        />
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Form Field Control'>
          <SubsectionDescription>
            A wrapper over
            {' '}
            {siteConfig.name}
            {' '}
            FormField with the passed control.
          </SubsectionDescription>
        </Subsection>
      </Section>
    </Component>
  );
}
