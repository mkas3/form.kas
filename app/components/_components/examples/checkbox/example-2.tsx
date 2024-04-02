type Example2Props = React.HTMLAttributes<HTMLDivElement>;

export const Example2 = ({ ...props }: Example2Props) => {
  return <div {...props}></div>;
};
