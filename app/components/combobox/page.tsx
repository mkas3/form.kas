import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Mark } from '@/components/shared/mark';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { CheckboxExample1 } from '@/app/components/_components/examples/checkbox/example-1';
import { ComboboxExampleHotels } from '@/app/components/_components/examples/combobox/combobox-example-hotels';

export default function ComboboxPage() {
  return (
    <Component
      heading='Combobox'
      description='Autocomplete input and command palette with a list of suggestions.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/combobox',
        },
      ]}
    >
      <Example
        folderNames={[
          'app',
          'components',
          '_components',
          'examples',
          'combobox',
        ]}
        fileName='combobox-example-hotels.tsx'
      >
        <ComboboxExampleHotels />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form', 'popover', 'command', 'button']}
          componentFileName='form-combobox.tsx'
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="combobox">\n' +
            '\t\t<FormComboboxList>\n' +
            '\t\t\t<FormComboboxTrigger defaultValue="Select option" />\n' +
            '\t\t\t<FormComboboxContent>\n' +
            '\t\t\t\t<FormComboboxInput placeholder="Search..." />\n' +
            '\t\t\t\t<FormComboboxList>\n' +
            '\t\t\t\t\t<FormComboboxEmpty>No one found.</FormComboboxEmpty>\n' +
            '\t\t\t\t\t<FormComboboxGroup>\n' +
            '\t\t\t\t\t\t<FormComboboxGroupItem value="1">1</FormComboboxGroupItem>\n' +
            '\t\t\t\t\t\t<FormComboboxGroupItem value="2">2</FormComboboxGroupItem>\n' +
            '\t\t\t\t\t\t<FormComboboxGroupItem value="3">3</FormComboboxGroupItem>\n' +
            '\t\t\t\t\t</FormComboboxGroup>\n' +
            '\t\t\t\t</FormComboboxList>\n' +
            '\t\t</FormComboboxContent>\n' +
            '\t</FormCombobox>\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Combobox'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui Popover.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Combobox Trigger'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui PopoverTrigger. The defaultValue
            parameter is shown until any value is selected.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'string | undefined',
                default: 'undefined',
              },
              {
                prop: 'defaultValue',
                type: 'string',
                default: "'Select Option'",
              },
            ]}
          />
        </Subsection>
        <Subsection heading='Combobox Content'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui PopoverContent and Command.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Combobox Input'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui CommandInput.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Combobox List'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui CommandList.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Combobox Empty'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui CommandEmpty.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Combobox Group'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui CommandGroup.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Combobox Group Item'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui CommandItem.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'string',
                default: 'undefined',
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Booking Hotel'>
          <Example
            folderNames={[
              'app',
              'components',
              '_components',
              'examples',
              'combobox',
            ]}
            fileName='combobox-example-hotels.tsx'
          >
            <ComboboxExampleHotels />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
