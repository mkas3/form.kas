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
import { NumberInputExampleProduct } from '@/app/components/_components/examples/number-input/number-input-example-product';

export default function NumberInputPage() {
  return (
    <Component
      heading='Number Input'
      description='An input where the user can enter only a numeric value may have a mask.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://s-yadav.github.io/react-number-format/docs/intro/',
        },
      ]}
    >
      <Example
        folderNames={[
          'app',
          'components',
          '_components',
          'examples',
          'number-input',
        ]}
        fileName='number-input-example-product.tsx'
      >
        <NumberInputExampleProduct />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form', 'input']}
          componentFileName='form-combobox.tsx'
          dependencies={['react-number-format']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="number-input">\n' +
            '\t\t<FormNumberInput />\n' +
            '\t</FormFieldItem>\n' +
            '\t<Button type="submit" />\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Number Input'>
          <SubsectionDescription>
            A wrapper over the react-number-format NumberInput.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'isNumericValue',
                type: 'boolean',
                default: 'false',
              },
              {
                prop: 'value',
                type: 'string | (number | undefined)',
                default: 'defaultValue | defaultNumericValue',
              },
              {
                prop: 'defaultValue',
                type: 'string',
                default: "''",
              },
              {
                prop: 'defaultNumericValue',
                type: 'number | undefined',
                default: 'undefined',
              },
            ]}
          />
        </Subsection>
        <Subsection heading='Form Number Masked Input'>
          <SubsectionDescription>
            A wrapper over the react-number-format MaskedInput.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'isNumericValue',
                type: 'boolean',
                default: 'false',
              },
              {
                prop: 'value',
                type: 'string | number?',
                default: 'defaultValue | defaultNumericValue',
              },
              {
                prop: 'defaultValue',
                type: 'string?',
                default: "''",
              },
              {
                prop: 'defaultNumericValue',
                type: 'number?',
                default: 'undefined',
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Products'>
          <Example
            folderNames={[
              'app',
              'components',
              '_components',
              'examples',
              'number-input',
            ]}
            fileName='number-input-example-product.tsx'
          >
            <NumberInputExampleProduct />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
