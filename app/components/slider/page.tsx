import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { SliderExamplePrice } from '@/app/components/_components/examples/slider/slider-example-price';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Slider',
  description: 'An input where the user selects a value from within a given range.'
};

export default function SliderPage() {
  return (
    <Component
      description='An input where the user selects a value from within a given range.'
      heading='Slider'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/slider'
        },
        {
          heading: 'Docs',
          href: 'https://www.radix-ui.com/primitives/docs/components/slider'
        },
        {
          heading: 'API Reference',
          href: 'https://www.radix-ui.com/primitives/docs/components/slider#api-reference'
        }
      ]}
      shortHeading='slider'
    >
      <Example
        fileName='slider-example-price.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'slider']}
      >
        <SliderExamplePrice />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-slider.tsx'
          shadcnDependencies={['form', 'slider']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="slider">\n'
          + '\t\t<FormSlider />\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Slider'>
          <SubsectionDescription>A wrapper over the shadcn/ui Slider.</SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: 'number[]',
                default: 'defaultValue'
              },
              {
                prop: 'defaultValue',
                type: 'number[]',
                default: '[50]'
              }
            ]}
          />
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Price Range'>
          <Example
            fileName='slider-example-price.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'slider']}
          >
            <SliderExamplePrice />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
