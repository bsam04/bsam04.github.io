export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-8">{children}</div>;
}
