import type { Metadata } from 'next';

import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';
import { ComponentProps } from '@/app/components/_components/component-props';
import { PasswordInputExampleAuth } from '@/app/components/_components/examples/password-input/password-input-example-auth';
import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';

export const metadata: Metadata = {
  title: 'Password Input',
  description: 'An input where the user can enter the password.'
};

export default function PasswordInputPage() {
  return (
    <Component
      description='An input where the user can enter the password.'
      heading='Password Input'
      links={[]}
      shortHeading='password-input'
    >
      <Example
        fileName='password-input-example-auth.tsx'
        folderNames={['app', 'components', '_components', 'examples', 'password-input']}
      >
        <PasswordInputExampleAuth />
      </Example>
      <Section heading='Installation'>
        <ComponentInstallation
          componentFileName='form-password-input.tsx'
          shadcnDependencies={['form', 'input', 'toggle']}
          hasDefaultValueHook
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n'
          + '\t<FormFieldItem<FormProps> name="password-input">\n'
          + '\t\t<FormPasswordInput />\n'
          + '\t</FormFieldItem>\n'
          + '\t<Button type="submit" />\n'
          + '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Password Input'>
          <SubsectionDescription>A wrapper over the shadcn/ui Input.</SubsectionDescription>
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
              },
              {
                prop: 'defaultPressed',
                type: 'boolean',
                default: 'false'
              }
            ]}
          />
        </Subsection>
        <Subsection heading='Password Input Root'>
          <SubsectionDescription />
          <ComponentProps
            componentProps={[
              {
                prop: 'defaultPressed',
                type: 'boolean',
                default: 'false'
              }
            ]}
          />
        </Subsection>
        <Subsection heading='Password Input Content'>
          <SubsectionDescription />
        </Subsection>
        <Subsection heading='Password Input Area'>
          <SubsectionDescription>A wrapper over the shadcn/ui Input.</SubsectionDescription>
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
        <Subsection heading='Password Input Toggle'>
          <SubsectionDescription>A wrapper over the shadcn/ui Toggle.</SubsectionDescription>
        </Subsection>
      </Section>
      <Section heading='Examples'>
        <Subsection heading='Auth'>
          <Example
            fileName='password-input-example-auth.tsx'
            folderNames={['app', 'components', '_components', 'examples', 'password-input']}
          >
            <PasswordInputExampleAuth />
          </Example>
        </Subsection>
      </Section>
    </Component>
  );
}
