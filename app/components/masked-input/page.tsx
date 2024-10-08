import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { MaskedInputExamplePhone } from '@/app/components/_components/examples/masked-input/masked-input-example-phone';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Masked Input',
  description: 'An input where the user can enter a value corresponding to the specified mask.'
};

export default function MaskedInputPage() {
  return (
    <Component
      description='An input where the user can enter a value corresponding to the specified mask.'
      heading='Masked Input'
      links={[
        {
          heading: 'Base Component',
          href: 'https://www.npmjs.com/package/react-text-mask'
        },
        {
          heading: 'Docs',
          href: 'https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme'
        }
      ]}
      shortHeading='masked-input'
    >
      <Example
        fileName='masked-input-example-phone.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'masked-input']}
      >
        <MaskedInputExamplePhone />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-masked-input.tsx'
          dependencies={['react-text-mask']}
          devDependencies={['@types/react-text-mask']}
          shadcnDependencies={['form', 'input']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="masked-input">\n'
          + '\t\t<FormMaskedInput />\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Masked Input'>
          <SubsectionDescription>A wrapper over the react-text-mask Input.</SubsectionDescription>
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
        <Subsection heading='Phone Number'>
          <Example
            fileName='masked-input-example-phone.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'masked-input']}
          >
            <MaskedInputExamplePhone />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
