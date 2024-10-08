import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { CheckboxExampleRegistration } from '@/app/components/_components/examples/checkbox/checkbox-example-registration';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Form',
  description: 'Building forms with React Hook Form and Zod.'
};

export default function FormPage() {
  return (
    <Component
      description='Building forms with React Hook Form and Zod.'
      heading='Form'
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
      shortHeading='form'
    >
      <Example
        fileName='checkbox-example-registration.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'checkbox']}
      >
        <CheckboxExampleRegistration />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form.tsx'
          shadcnDependencies={['form']}
          hasZodFormHook
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
        <Subsection heading='Form'>
          <SubsectionDescription>A wrapper over the shadcn/ui Form.</SubsectionDescription>
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Registration Form'>
          <Example
            fileName='checkbox-example-registration.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'checkbox']}
          >
            <CheckboxExampleRegistration />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
