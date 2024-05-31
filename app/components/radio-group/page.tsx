import { Metadata } from 'next';

import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { RadioGroupExampleQuiz } from '@/app/components/_components/examples/radio-group/radio-group-example-quiz';

export const metadata: Metadata = {
  title: 'Radio Group',
  description:
    'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
};

export default function RadioGroupPage() {
  return (
    <Component
      shortHeading='radio-group'
      heading='Radio Group'
      description='A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/radio-group',
        },
        {
          heading: 'Docs',
          href: 'https://www.radix-ui.com/primitives/docs/components/radio-group',
        },
        {
          heading: 'API Reference',
          href: 'https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference',
        },
      ]}
    >
      <Example
        folderNames={[
          'app',
          'components',
          '_components',
          'examples',
          'radio-group',
        ]}
        fileName='radio-group-example-quiz.tsx'
      >
        <RadioGroupExampleQuiz />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form', 'radio-group']}
          componentFileName='form-radio-group.tsx'
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="radio">\n' +
            '\t\t<FormRadioGroup defaultValue="option-one">\n' +
            '\t\t\t<div className="flex items-center space-x-2">\n' +
            '\t\t\t\t<FormRadioGroupItem value="option-one" id="option-one" />\n' +
            '\t\t\t\t<Label htmlFor="option-one">Option One</Label>\n' +
            '\t\t\t</div>\n' +
            '\t\t\t<div className="flex items-center space-x-2">\n' +
            '\t\t\t\t<FormRadioGroupItem value="option-two" id="option-two" />\n' +
            '\t\t\t\t<Label htmlFor="option-two">Option Two</Label>\n' +
            '\t\t\t</div>\n' +
            '\t\t</FormRadioGroup>\n' +
            '\t</FormFieldItem>\n' +
            '\t<Button type="submit" />\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Radio Group'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui RadioGroup.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'string | undefined',
                default: 'defaultValue',
              },
              {
                prop: 'defaultValue',
                type: 'string | undefined',
                default: 'undefined',
              },
            ]}
          />
        </Subsection>
        <Subsection heading='Radio Group Item'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui RadioGroupItem.
          </SubsectionDescription>
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Quiz'>
          <Example
            folderNames={[
              'app',
              'components',
              '_components',
              'examples',
              'radio-group',
            ]}
            fileName='radio-group-example-quiz.tsx'
          >
            <RadioGroupExampleQuiz />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
