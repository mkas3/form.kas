import React from 'react';

type SubsectionDescriptionProps = React.ComponentPropsWithoutRef<'p'>;

export const SubsectionDescription = ({ ...props }: SubsectionDescriptionProps) => {
  return <p className='leading-7' {...props} />;
};
