type SubsectionDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

export const SubsectionDescription = ({
  ...props
}: SubsectionDescriptionProps) => {
  return <p className='leading-7' {...props} />;
};
