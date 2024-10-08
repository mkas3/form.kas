import type { Metadata } from 'next';

import { Code } from '@/components/shared/code';
import { FileCode } from '@/components/shared/file-code';
import { Mark } from '@/components/shared/mark';
import { Section } from '@/components/shared/section';
import { Bold } from '@/components/ui/bold';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Description } from '@/components/ui/description';
import { Heading } from '@/components/ui/heading';
import { Link } from '@/components/ui/link';
import { Paragraph } from '@/components/ui/paragraph';

export const metadata: Metadata = {
  title: 'Components',
  description:
    'Form components based on shadcn/ui components using the zod and react-hook-form approach of shadcn.'
};

const ComponentsPage = () => {
  return (
    <>
      <Breadcrumb className='mb-4'>
        <BreadcrumbList>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Components</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading className='mb-2' as='h1'>
        Components
      </Heading>
      <Description className='mb-4'>
        General description of how the components are organized
      </Description>
      <Paragraph>
        All the code I wrote exists to simplify my life, so I hope these components will help you
        {' '}
        <Bold>make forms easier</Bold>
        . Below are some of the concepts I used to build the
        components, so I suggest you read some of the chapters.
      </Paragraph>
      <Section heading='Packages'>
        <Paragraph>
          Each component has in its dependencies the
          {' '}
          <Link href='https://ui.shadcn.com/docs/components/form' underline>
            shadcn component Form
          </Link>
          , which in turn has in its dependencies
          {' '}
          <Link href='https://zod.dev' underline>
            zod
          </Link>
          {' '}
          and
          {' '}
          <Link href='https://react-hook-form.com' underline>
            react-hook-form
          </Link>
          {' '}
          . For this reason, my components are aimed at simplifying interaction with these
          libraries.
        </Paragraph>
        <Paragraph>
          To simplify the use of zod in forms, I created the
          {' '}
          <Mark>useZodForm</Mark>
          {' '}
          hook that
          accepts the schema as a parameter. This hook wraps
          {' '}
          <Mark>useForm</Mark>
          {' '}
          from
          {' '}
          <Link href='https://react-hook-form.com' underline>
            react-hook-form
          </Link>
          {' '}
          to create forms in a more understandable way.
        </Paragraph>
        <FileCode className='mt-4' fileName='use-zod-form.ts' folderNames={['hooks']} />
      </Section>
      <Section heading='Default Value'>
        <Paragraph>
          Components are built to always have a logical and defined
          {' '}
          <Mark>value</Mark>
          {' '}
          prop so that
          components are
          {' '}
          <Bold>controllable when mounted</Bold>
          , so almost every component takes as
          {' '}
          <Mark>defaultValue</Mark>
          {' '}
          what the resulting value will be.
        </Paragraph>
        <Paragraph>
          This is achieved through the
          {' '}
          <Mark>useFormDefaultValue</Mark>
          {' '}
          hook.
        </Paragraph>
        <FileCode className='mt-4' fileName='use-form-default-value.ts' folderNames={['hooks']} />
        <Paragraph>
          The default value of a component can be found in the
          {' '}
          <Bold>API Reference</Bold>
          {' '}
          section of
          each individual component&apos;s page.
        </Paragraph>
      </Section>
      <Section heading='Server-Side Rendering'>
        <Paragraph>
          In order to provide forms rendering on the server, I created the
          {' '}
          <Mark>FormFieldControl</Mark>
          {' '}
          and
          <Mark>FormFieldItem</Mark>
          {' '}
          components as generics.
          Therefore, forms can easily be created on the server by simply wrapping the parent
          {' '}
          <Bold>Form component in a client component</Bold>
          .
        </Paragraph>
        <Code className='mt-4'>
          {'\'use client\';\n'
          + '\n'
          + 'const formSchema = z.object({\n'
          + '  /* ... */\n'
          + '});\n'
          + '\n'
          + 'export type FormSchema = z.infer<typeof formSchema>;\n'
          + '\n'
          + 'type ClientFormProps = Omit<\n'
          + '  React.ComponentPropsWithoutRef<typeof Form>,\n'
          + '  \'form\' | \'onSubmit\' | \'onInvalidSubmit\'\n'
          + '>;\n'
          + '\n'
          + 'export const ClientForm = ({ ...props }: ClientFormProps) => {\n'
          + '  const form = useZodForm(formSchema);\n'
          + '\n'
          + '  const handleSubmit = () => {\n'
          + '    /* ... */\n'
          + '  };\n'
          + '\n'
          + '  const handleInvalidSubmit = () => {\n'
          + '    /* ... */\n'
          + '  };\n'
          + '\n'
          + '  return (\n'
          + '    <Form\n'
          + '      form={form}\n'
          + '      onSubmit={handleSubmit}\n'
          + '      onInvalidSubmit={handleInvalidSubmit}\n'
          + '      {...props}\n'
          + '    />\n'
          + '  );\n'
          + '};\n'}
        </Code>
        <Paragraph>
          And you can easily build
          {' '}
          <Bold>server components</Bold>
          {' '}
          in the future.
        </Paragraph>
        <Code className='mt-4'>
          {'export const ExampleComponent = () => {\n'
          + '  return (\n'
          + '    <ClientForm>\n'
          + '      <FormFieldItem<FormSchema> name=\'...\'>\n'
          + '        <FormCheckbox />\n'
          + '        <FormMessage />\n'
          + '      </FormFieldItem>\n'
          + '    </ClientForm>\n'
          + '  );\n'
          + '};'}
        </Code>
      </Section>
    </>
  );
};

export default ComponentsPage;
