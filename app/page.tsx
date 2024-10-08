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
import { Italic } from '@/components/ui/italic';
import { Link } from '@/components/ui/link';
import { Paragraph } from '@/components/ui/paragraph';
import { siteConfig } from '@/config/site';

const IntroductionPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteConfig.url,
    mainEntityOfPage: {
      '@type': 'CollectionPage',
      name: 'Components',
      url: `${siteConfig.url}/components`
    }
  };

  return (
    <>
      <script
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type='application/ld+json'
      />
      <Breadcrumb className='mb-4'>
        <BreadcrumbList>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Introduction</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading as='h1' className='mb-2'>
        Introduction
      </Heading>
      <Description className='mb-4'>
        Form components based on{' '}
        <Link href='https://ui.shadcn.com' underline>
          shadcn/ui components
        </Link>{' '}
        using the{' '}
        <Link href='https://zod.dev' underline>
          zod
        </Link>{' '}
        and{' '}
        <Link href='https://react-hook-form.com' underline>
          react-hook-form
        </Link>{' '}
        approach of shadcn.
      </Description>
      <Paragraph>
        My components are <Bold>not installed as a separate dependency</Bold> and{' '}
        <Bold>do not have a corresponding npm package</Bold>. You can take these components for
        personal use and modification by simply copying them <Bold>for free</Bold>.
      </Paragraph>
      <Paragraph>
        Most of the components are built as client-side components because they use hooks to access
        the form, which allows you to write them in a more React friendly way without using your own
        hooks.
      </Paragraph>
      <Paragraph>
        I don&apos;t claim my components are correct, so if anyone wants to make comments, I&apos;m
        always happy to hear them on{' '}
        <Link href={siteConfig.links.githubProject} underline>
          Github
        </Link>
        .
      </Paragraph>
      <Paragraph>
        <Italic>
          If you have any other questions, shadcn has probably already answered them on his{' '}
          <Link href='https://ui.shadcn.com/docs' underline>
            site
          </Link>
          .
        </Italic>
      </Paragraph>
    </>
  );
};

export default IntroductionPage;
