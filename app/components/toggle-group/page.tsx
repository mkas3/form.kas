import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { ToggleGroupExampleFilter } from '@/app/components/_components/examples/toggle-group/toggle-group-example-filter';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Toggle Group',
  description: 'A set of two-state buttons that can be toggled on or off.'
};

export default function ToggleGroupPage() {
  return (
    <Component
      description='A set of two-state buttons that can be toggled on or off.'
      heading='Toggle Group'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/toggle-group'
        },
        {
          heading: 'Docs',
          href: 'https://www.radix-ui.com/primitives/docs/components/toggle-group'
        },
        {
          heading: 'API Reference',
          href: 'https://www.radix-ui.com/primitives/docs/components/toggle-group#api-reference'
        }
      ]}
      shortHeading='toggle-group'
    >
      <Example
        fileName='toggle-group-example-filter.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'toggle-group']}
      >
        <ToggleGroupExampleFilter />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-toggle-group.tsx'
          shadcnDependencies={['form', 'toggle-group']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="toggles">\n'
          + '\t\t<FormToggleGroup type="single">\n'
          + '\t\t\t<FormToggleGroupItem value="a">A</FormToggleGroupItem>\n'
          + '\t\t\t<FormToggleGroupItem value="b">B</FormToggleGroupItem>\n'
          + '\t\t\t<FormToggleGroupItem value="c">C</FormToggleGroupItem>\n'
          + '\t\t</FormToggleGroup>\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Toggle Group'>
          <SubsectionDescription>A wrapper over the shadcn/ui ToggleGroup.</SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'string | string[]',
                default: 'defaultValue'
              },
              {
                prop: 'defaultValue',
                type: 'string | string[]',
                default: '\'\' | []'
              }
            ]}
          />
        </Subsection>
        <Subsection heading='Toggle Group Item'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui ToggleGroupItem.
          </SubsectionDescription>
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Filters'>
          <Example
            fileName='toggle-group-example-filter.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'toggle-group']}
          >
            <ToggleGroupExampleFilter />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
