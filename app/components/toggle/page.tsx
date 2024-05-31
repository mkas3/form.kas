import { Metadata } from 'next';

import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { ToggleExampleNotifications } from '@/app/components/_components/examples/toggle/toggle-example-notifications';

export const metadata: Metadata = {
  title: 'Toggle',
  description: 'A two-state button that can be either on or off.',
};

export default function TogglePage() {
  return (
    <Component
      shortHeading='toggle'
      heading='Toggle'
      description='A two-state button that can be either on or off.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/toggle',
        },
        {
          heading: 'Docs',
          href: 'https://www.radix-ui.com/primitives/docs/components/toggle',
        },
        {
          heading: 'API Reference',
          href: 'https://www.radix-ui.com/primitives/docs/components/toggle#api-reference',
        },
      ]}
    >
      <Example
        folderNames={['app', 'components', '_components', 'examples', 'toggle']}
        fileName='toggle-example-notifications.tsx'
      >
        <ToggleExampleNotifications />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form', 'toggle']}
          componentFileName='form-toggle.tsx'
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="toggle">\n' +
            '\t\t<FormToggle>Toggle</FormToggle>\n' +
            '\t</FormFieldItem>\n' +
            '\t<Button type="submit" />\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Toggle'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui Toggle.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'pressed',
                type: 'boolean',
                default: 'defaultPressed',
              },
              {
                prop: 'defaultPressed',
                type: 'boolean',
                default: 'false',
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Notifications'>
          <Example
            folderNames={[
              'app',
              'components',
              '_components',
              'examples',
              'toggle',
            ]}
            fileName='toggle-example-notifications.tsx'
          >
            <ToggleExampleNotifications />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
