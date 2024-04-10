import { Code } from '@/components/shared/code';
import { Example } from '@/components/shared/example';
import { Mark } from '@/components/shared/mark';
import { Section } from '@/components/shared/section';
import { Subsection } from '@/components/shared/subsection';
import { SubsectionDescription } from '@/components/shared/subsection-description';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';

export default function FieldItemPage() {
  return (
    <Component
      heading='Form Field Item'
      description='Wrapper over Form.kas FormFieldControl with FormItem inside.'
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
          componentFileName='form-field-item.tsx'
          innerDependencies={['form-field-control.tsx', 'form-field.tsx']}
        />
      </Section>
      <Section heading='Usage'>
        <Code>
          {'<Form form={form} onSubmit={handleSubmit}>\n' +
            '\t<FormFieldItem<FormProps> name="checkbox">\n' +
            '\t\t<FormCheckbox />\n' +
            '\t</FormFieldItem>\n' +
            '\t<Button type="submit" />\n' +
            '</Form>'}
        </Code>
      </Section>
      <Section heading='API Reference'>
        <Subsection heading='Form Field Item'>
          <SubsectionDescription>
            A wrapper over Form.kas FormFieldControl with FormItem inside.
          </SubsectionDescription>
        </Subsection>
      </Section>
    </Component>
  );
}
