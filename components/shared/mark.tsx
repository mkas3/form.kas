type MarkProps = React.ComponentPropsWithoutRef<'mark'>;

export const Mark = ({ ...props }: MarkProps) => {
  return (
    <mark
      className='relative z-0 inline-flex bg-transparent px-1.5 font-mono text-sm text-foreground before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-secondary'
      {...props}
    />
  );
};
