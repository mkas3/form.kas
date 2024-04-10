import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';

export default function FieldControlPage() {
  return (
    <Component
      heading='Form Field Control'
      description='Wrapper over Form.kas FormField with the passed control.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/form',
        },
        {
          heading: 'Docs',
          href: 'https://react-hook-form.com/',
        },
      ]}
    >
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form']}
          innerDependencies={['form-field.tsx']}
          componentFileName='form-field-control.tsx'
        />
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Form Field Control'>
          <SubsectionDescription>
            A wrapper over Form.kas FormField with the passed control.
          </SubsectionDescription>
        </Subsection>
      </Section>
    </Component>
  );
}
