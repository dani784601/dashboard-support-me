export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-screen p-24">
      {children}
    </section>
  );
}
