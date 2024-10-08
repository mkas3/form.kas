import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { PhoneNumberInputExample } from '@/app/components/_components/examples/phone-number-input/phone-number-input-example';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Phone Number Input',
  description: 'Input for the phone number.'
};

export default function PhoneNumberInput() {
  return (
    <Component
      description='Input for the phone number.'
      heading='Phone Number Input'
      links={[
        {
          heading: 'Base Component',
          href: 'https://www.npmjs.com/package/react-phone-number-input'
        }
      ]}
      shortHeading='phone-number-input'
    >
      <Example
        fileName='phone-number-input-example.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'phone-number-input']}
      >
        <PhoneNumberInputExample />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-phone-number-input.tsx'
          dependencies={['react-phone-number-input', 'country-flag-icons']}
          shadcnDependencies={['form', 'input', 'select']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="phone">\n'
          + '\t\t<FormPhoneNumberInput />\n'
          + '\t\t<FormMessage />\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Phone Number Input'>
          <SubsectionDescription>
            The main component that collects all the others.
          </SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
                type: '{ phoneNumber: E164Number, country: CountryCode }',
                default: '{ phoneNumber: defaultPhoneNumber, country: defaultCountry }'
              },
              {
                prop: 'defaultPhoneNumber',
                type: 'E164Number',
                default: '\'\''
              },
              {
                prop: 'defaultCountry',
                type: 'CountryCode',
                default: 'ZZ'
              }
            ]}
          />
        </Subsection>
        <Subsection heading='Country Select'>
          <SubsectionDescription />
          <ComponentProps
            componentProps={[
              {
                prop: 'name',
                type: 'string',
                default: 'undefined'
              },
              {
                prop: 'value',
                type: 'string',
                default: 'undefined'
              },
              {
                prop: 'onChange',
                type: '(value?: string) => void',
                default: 'undefined'
              },
              {
                prop: 'onFocus',
                type: '(event: React.FocusEvent<HTMLSelectElement>) => void',
                default: 'undefined'
              },
              {
                prop: 'onBlur',
                type: '(event: React.ChangeEvent<HTMLSelectElement>) => void',
                default: 'undefined'
              },
              {
                prop: 'options',
                type: '{ value?: string; label: string; divider?: boolean }[]',
                default: '[]'
              },
              {
                prop: 'iconComponent',
                type: 'React.ElementType',
                default: 'undefined'
              },
              {
                prop: 'disabled',
                type: 'boolean',
                default: 'false'
              },
              {
                prop: 'readOnly',
                type: 'boolean',
                default: 'false'
              },
              {
                prop: 'tabIndex',
                type: 'number | string',
                default: 'undefined'
              },
              {
                prop: 'withIcon',
                type: 'boolean',
                default: 'false'
              },
              {
                prop: 'unicodeFlags',
                type: 'boolean',
                default: 'false'
              },
              {
                prop: 'contentClassName',
                type: 'string',
                default: 'undefined'
              },
              {
                prop: 'itemClassName',
                type: 'string',
                default: 'undefined'
              },
              {
                prop: 'triggerClassName',
                type: 'string',
                default: 'undefined'
              },
              {
                prop: 'iconWrapperClassName',
                type: 'string',
                default: 'undefined'
              }
            ]}
          />
        </Subsection>
        <Subsection heading='Phone Number Input Area'>
          <SubsectionDescription>A wrapper over the shadcn/ui Input.</SubsectionDescription>
          <ComponentProps
            componentProps={[
              {
                prop: 'value',
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
            fileName='phone-number-input-example.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'phone-number-input']}
          >
            <PhoneNumberInputExample />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
