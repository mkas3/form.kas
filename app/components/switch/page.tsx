import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { SwitchExampleTheme } from '@/app/components/_components/examples/switch/switch-example-theme';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Switch',
  description: 'A control that allows the user to toggle between checked and not checked.'
};

export default function SwitchPage() {
  return (
    <Component
      description='A control that allows the user to toggle between checked and not checked.'
      heading='Switch'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/switch'
        },
        {
          heading: 'Docs',
          href: 'https://www.radix-ui.com/primitives/docs/components/switch'
        },
        {
          heading: 'API Reference',
          href: 'https://www.radix-ui.com/primitives/docs/components/switch#api-reference'
        }
      ]}
      shortHeading='switch'
    >
      <Example
        fileName='switch-example-theme.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'switch']}
      >
        <SwitchExampleTheme />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-switch.tsx'
          shadcnDependencies={['form', 'switch']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="switch">\n'
          + '\t\t<div className="flex items-center space-x-2">\n'
          + '\t\t\t<FormSwitch id="switch" />\n'
          + '\t\t\t<Label htmlFor="switch">Switch</Label>\n'
          + '\t\t</div>\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Switch'>
          <SubsectionDescription>A wrapper over the shadcn/ui Switch.</SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'checked',
                type: 'boolean',
                default: 'defaultChecked'
              },
              {
                prop: 'defaultChecked',
                type: 'boolean',
                default: 'false'
              }
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Theme'>
          <Example
            fileName='switch-example-theme.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'switch']}
          >
            <SwitchExampleTheme />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
