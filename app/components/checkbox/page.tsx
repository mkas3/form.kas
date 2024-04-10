import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Mark } from '@/components/shared/mark';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { ComponentProps } from '@/app/components/_components/component-props';
import { CheckboxExampleRegistration } from '@/app/components/_components/examples/checkbox/checkbox-example-registration';

import { Component } from '../_components/component';
import { ComponentInstallation } from '../_components/component-installation';

export default function CheckboxPage() {
  return (
    <Component
      heading='Checkbox'
      description='A control that allows the user to toggle between checked and not checked.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/checkbox',
        },
        {
          heading: 'Docs',
          href: 'https://www.radix-ui.com/primitives/docs/components/checkbox',
        },
        {
          heading: 'API Reference',
          href: 'https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference',
        },
      ]}
    >
      <Example
        folderNames={[
          'app',
          'components',
          '_components',
          'examples',
          'checkbox',
        ]}
        fileName='checkbox-example-registration.tsx'
      >
        <CheckboxExampleRegistration />
      </Example>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="checkbox">\n' +
            '\t\t<FormCheckbox />\n' +
            '\t</FormFieldItem>\n' +
            '\t<Button type="submit" />\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form', 'checkbox']}
          componentFileName='form-checkbox.tsx'
          hasDefaultValueHook
        />
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Checkbox'>
          <SubsectionDescription>
            The Checkbox has a <Mark>checked</Mark> equal to prop{' '}
            <Mark>defaultChecked</Mark> when mounted.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'checked',
                type: 'boolean',
                default: 'defaultChecked',
              },
              {
                prop: 'defaultChecked',
                type: 'boolean',
                default: 'false',
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Registration Form'>
          <Example
            folderNames={[
              'app',
              'components',
              '_components',
              'examples',
              'checkbox',
            ]}
            fileName='checkbox-example-registration.tsx'
          >
            <CheckboxExampleRegistration />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
