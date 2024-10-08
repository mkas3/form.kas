import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { SelectExampleVisa } from '@/app/components/_components/examples/select/select-example-visa';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Select',
  description: 'Displays a list of options for the user to pick from—triggered by a button.'
};

export default function SelectPage() {
  return (
    <Component
      description='Displays a list of options for the user to pick from—triggered by a button.'
      heading='Select'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/select'
        },
        {
          heading: 'Docs',
          href: 'https://www.radix-ui.com/primitives/docs/components/select'
        },
        {
          heading: 'API Reference',
          href: 'https://www.radix-ui.com/primitives/docs/components/select#api-reference'
        }
      ]}
      shortHeading='select'
    >
      <Example
        fileName='select-example-visa.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'select']}
      >
        <SelectExampleVisa />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-select.tsx'
          shadcnDependencies={['form', 'select']}
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="select">\n'
          + '\t\t<FormSelect>\n'
          + '\t\t\t<FormSelectTrigger>\n'
          + '\t\t\t\t<FormSelectValue placeholder="Select…" />\n'
          + '\t\t\t</FormSelectTrigger>\n'
          + '\t\t\t<FormSelectContent>\n'
          + '\t\t\t\t<FormSelectGroup>\n'
          + '\t\t\t\t\t<FormSelectLabel>Options</FormSelectLabel>\n'
          + '\t\t\t\t\t<FormSelectItem value="option-one">Option One</FormSelectItem>\n'
          + '\t\t\t\t\t<FormSelectItem value="option-two">Option Two</FormSelectItem>\n'
          + '\t\t\t\t\t<FormSelectItem value="option-three">Option Three</FormSelectItem>\n'
          + '\t\t\t\t</FormSelectGroup>\n'
          + '\t\t\t</FormSelectContent>\n'
          + '\t\t</FormSelect>\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Select'>
          <SubsectionDescription>A wrapper over the shadcn/ui Select.</SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'string | undefined',
                default: 'defaultValue'
              },
              {
                prop: 'defaultValue',
                type: 'string | undefined',
                default: 'undefined'
              }
            ]}
          />
        </Subsection>
        <Subsection heading='Select Trigger'>
          <SubsectionDescription>A wrapper over the shadcn/ui SelectTrigger.</SubsectionDescription>
        </Subsection>
        <Subsection heading='Select Value'>
          <SubsectionDescription>A wrapper over the shadcn/ui SelectValue.</SubsectionDescription>
        </Subsection>
        <Subsection heading='Select Content'>
          <SubsectionDescription>A wrapper over the shadcn/ui SelectContent.</SubsectionDescription>
        </Subsection>
        <Subsection heading='Select Item'>
          <SubsectionDescription>A wrapper over the shadcn/ui SelectItem.</SubsectionDescription>
        </Subsection>
        <Subsection heading='Select Group'>
          <SubsectionDescription>A wrapper over the shadcn/ui SelectGroup.</SubsectionDescription>
        </Subsection>
        <Subsection heading='Select Label'>
          <SubsectionDescription>A wrapper over the shadcn/ui SelectLabel.</SubsectionDescription>
        </Subsection>
        <Subsection heading='Select Separator'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui SelectSeparator.
          </SubsectionDescription>
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Visa Type'>
          <Example
            fileName='select-example-visa.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'select']}
          >
            <SelectExampleVisa />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
