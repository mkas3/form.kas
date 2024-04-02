export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='relative min-h-screen w-full p-6'>{children}</main>;
}
