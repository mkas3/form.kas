import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { InputExampleSearch } from '@/app/components/_components/examples/input/input-example-search';

export default function InputPage() {
  return (
    <Component
      heading='Input'
      description='Displays a form input field or a component that looks like an input field.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/input',
        },
      ]}
    >
      <Example
        folderNames={['app', 'components', '_components', 'examples', 'input']}
        fileName='input-example-search.tsx'
      >
        <InputExampleSearch />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form', 'input']}
          componentFileName='form-input.tsx'
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="input">\n' +
            '\t\t<FormInput />\n' +
            '\t</FormFieldItem>\n' +
            '\t<Button type="submit" />\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Input'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui Input.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'string',
                default: 'defaultValue',
              },
              {
                prop: 'defaultValue',
                type: 'string',
                default: "''",
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Search'>
          <Example
            folderNames={[
              'app',
              'components',
              '_components',
              'examples',
              'input',
            ]}
            fileName='input-example-search.tsx'
          >
            <InputExampleSearch />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
