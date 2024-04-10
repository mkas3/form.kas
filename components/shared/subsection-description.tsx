type SubsectionDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const SubsectionDescription = ({
  ...props
}: SubsectionDescriptionProps) => {
  return <p className='leading-7' {...props} />;
};
