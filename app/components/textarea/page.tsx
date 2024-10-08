import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { TextareaExampleHelp } from '@/app/components/_components/examples/textarea/textarea-example-help';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Textarea',
  description: 'Displays a form textarea or a component that looks like a textarea.'
};

export default function TextareaPage() {
  return (
    <Component
      description='Displays a form textarea or a component that looks like a textarea.'
      heading='Textarea'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/textarea'
        }
      ]}
      shortHeading='textarea'
    >
      <Example
        fileName='textarea-example-help.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'textarea']}
      >
        <TextareaExampleHelp />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-textarea.tsx'
          shadcnDependencies={['form', 'textarea']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="textarea">\n'
          + '\t\t<FormTextarea placeholder="Type your text here." />\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Textarea'>
          <SubsectionDescription>A wrapper over the shadcn/ui Textarea.</SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'string',
                default: 'defaultValue'
              },
              {
                prop: 'defaultValue',
                type: 'string',
                default: '\'\''
              }
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Help'>
          <Example
            fileName='textarea-example-help.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'textarea']}
          >
            <TextareaExampleHelp />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
