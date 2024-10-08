import { Heading } from '@/components/ui/heading';

type SectionProps = {
  heading: string;
  children?: React.ReactNode;
};

export const Section = ({ heading, children }: SectionProps) => {
  return (
    <div className='flex flex-col space-y-8'>
      <Heading className='mb-6 mt-12 border-b pb-2' as='h2'>
        {heading}
      </Heading>
      {children}
    </div>
  );
};
