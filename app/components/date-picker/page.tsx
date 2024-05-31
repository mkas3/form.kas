import { Metadata } from 'next';

import { Popover } from '@/components/ui/popover';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { DatePickerExampleHotel } from '@/app/components/_components/examples/date-picker/date-picker-example-hotel';

export const metadata: Metadata = {
  title: 'Date Picker',
  description: 'A date picker component with range and presets.',
};

export default function DatePickerPage() {
  return (
    <Component
      shortHeading='date-picker'
      heading='Date Picker'
      description='A date picker component with range and presets.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/date-picker',
        },
      ]}
    >
      <Example
        folderNames={[
          'app',
          'components',
          '_components',
          'examples',
          'date-picker',
        ]}
        fileName='date-picker-example-hotel.tsx'
      >
        <DatePickerExampleHotel />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form', 'button', 'calendar', 'popover']}
          componentFileName='form-date-picker.tsx'
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="datePicker">\n' +
            '\t\t<FormDatePicker>\n' +
            '\t\t\t<FormDatePickerTrigger defaultValue="Select Date" />\n' +
            '\t\t\t<FormDatePickerContent>\n' +
            '\t\t\t\t<FormDatePickerCalendar />\n' +
            '\t\t\t</FormDatePickerContent>\n' +
            '\t\t</FormDatePicker>\n' +
            '\t</FormFieldItem>\n' +
            '\t<Button type="submit" />\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Date Picker'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui Popover.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Date Picker Trigger'>
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
                default: "'Select Date'",
              },
            ]}
          />
        </Subsection>
        <Subsection heading='Date Picker Content'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui PopoverContent.
          </SubsectionDescription>
        </Subsection>
        <Subsection heading='Date Picker Calendar'>
          <SubsectionDescription>
            A wrapper over the shadcn/ui Calendar.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'selected',
                type: 'Date | undefined',
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
              'date-picker',
            ]}
            fileName='date-picker-example-hotel.tsx'
          >
            <DatePickerExampleHotel />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
