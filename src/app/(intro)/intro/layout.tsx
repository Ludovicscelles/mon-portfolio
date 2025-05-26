export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
