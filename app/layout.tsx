export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><title>My Blog</title></head>
      <body className="px-4 md:px-20">{children}</body>
    </html>
  );
}