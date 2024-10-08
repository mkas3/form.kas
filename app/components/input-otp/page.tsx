import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { InputOTPExamplePassword } from '@/app/components/_components/examples/input-otp/input-otp-example-password';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Input OTP',
  description: 'Accessible one-time password component with copy paste functionality.'
};

export default function InputOTPPage() {
  return (
    <Component
      description='Accessible one-time password component with copy paste functionality.'
      heading='Input OTP'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/input-otp'
        },
        {
          heading: 'Docs',
          href: 'https://input-otp.rodz.dev/'
        }
      ]}
      shortHeading='input-otp'
    >
      <Example
        fileName='input-otp-example-password.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'input-otp']}
      >
        <InputOTPExamplePassword />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-input-otp.tsx'
          shadcnDependencies={['form', 'input-otp']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="otp">\n'
          + '\t\t<FormInputOTP maxLength={6}>\n'
          + '\t\t\t<FormInputOTPGroup>\n'
          + '\t\t\t\t<FormInputOTPSlot index={0} />\n'
          + '\t\t\t\t<FormInputOTPSlot index={1} />\n'
          + '\t\t\t\t<FormInputOTPSlot index={2} />\n'
          + '\t\t\t</FormInputOTPGroup>\n'
          + '\t\t\t<FormInputOTPSeparator >\n'
          + '\t\t\t<FormInputOTPGroup>\n'
          + '\t\t\t\t<FormInputOTPSlot index={3} />\n'
          + '\t\t\t\t<FormInputOTPSlot index={4} />\n'
          + '\t\t\t\t<FormInputOTPSlot index={5} />\n'
          + '\t\t\t</FormInputOTPGroup>\n'
          + '\t\t</FormInputOTP>\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Input OTP'>
          <SubsectionDescription>A wrapper over the shadcn/ui InputOTP.</SubsectionDescription>
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
        <Subsection heading='Input OTP Group'>
          <SubsectionDescription>A wrapper over the shadcn/ui InputOTPGroup.</SubsectionDescription>
        </Subsection>
        <Subsection heading='Input OTP Slot'>
          <SubsectionDescription>A wrapper over the shadcn/ui InputOTPSlot.</SubsectionDescription>
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='One-Time Password'>
          <Example
            fileName='input-otp-example-password.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'input-otp']}
          >
            <InputOTPExamplePassword />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
