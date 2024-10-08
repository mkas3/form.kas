import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { Code } from '@/components/shared/code';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Form Field Item',
  description: `Wrapper over ${siteConfig.name} FormFieldControl with FormItem inside.`
};

export default function FieldItemPage() {
  return (
    <Component
      description={`Wrapper over ${siteConfig.name} FormFieldControl with FormItem inside.`}
      heading='Form Field Item'
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
      shortHeading='field-item'
    >
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-field-item.tsx'
          innerDependencies={['form-field-control.tsx', 'form-field.tsx']}
          shadcnDependencies={['form']}
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="checkbox">\n'
          + '\t\t<FormCheckbox />\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Form Field Item'>
          <SubsectionDescription>
            A wrapper over
            {' '}
            {siteConfig.name}
            {' '}
            FormFieldControl with FormItem inside.
          </SubsectionDescription>
        </Subsection>
      </Section>
    </Component>
  );
}
