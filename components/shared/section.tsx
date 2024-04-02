type SectionProps = {
  heading: string;
  children?: React.ReactNode;
};

export const Section = ({ heading, children }: SectionProps) => {
  return (
    <div className='flex flex-col gap-y-6'>
      <h2 className='mt-12 border-b pb-2 text-2xl font-semibold tracking-tight'>
        {heading}
      </h2>
      {children}
    </div>
  );
};
