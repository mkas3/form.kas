import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Mark } from '@/components/shared/mark';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

import { Component } from '../_components/component';
import { ComponentInstallation } from '../_components/component-installation';
import { CheckboxExample1 } from '../_components/examples/checkbox/example-1';

export default function CheckboxPage() {
  return (
    <Component
      heading='Checkbox'
      description='A control that allows the user to toggle between checked and not checked.'
      links={[
        {
          heading: 'shadcn/ui reference',
          href: 'https://ui.shadcn.com/docs/components/checkbox',
        },
      ]}
    >
      <Example
        folderName='checkbox'
        fileName='example-1.tsx'
        component={<CheckboxExample1 />}
      />
      <Section heading='Installation'>
        <ComponentInstallation />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'import {\n' +
            '  Carousel,\n' +
            '  CarouselContent,\n' +
            '  CarouselItem,\n' +
            '  CarouselNext,\n' +
            '  CarouselPrevious,\n' +
            '} from "@/components/ui/carousel"'}
        </Code>
        <Code>
          {'<Carousel>\n' +
            '  <CarouselContent>\n' +
            '    <CarouselItem>...</CarouselItem>\n' +
            '    <CarouselItem>...</CarouselItem>\n' +
            '    <CarouselItem>...</CarouselItem>\n' +
            '  </CarouselContent>\n' +
            '  <CarouselPrevious />\n' +
            '  <CarouselNext />\n' +
            '</Carousel>'}
        </Code>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Sizes'>
          <SubsectionDescription>
            {
              'To set the size of the items, you can use the basis utility class on the'
            }{' '}
            <Mark>{'<CarouselItem />'}</Mark>.
          </SubsectionDescription>
        </Subsection>
      </Section>
    </Component>
  );
}
