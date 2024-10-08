import React from 'react';

type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const Footer = ({ ...props }: FooterProps) => {
  return <footer className='border-t px-16 py-6 text-sm text-muted-foreground' {...props} />;
};
