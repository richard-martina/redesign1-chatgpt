import "./globals.css";

export const metadata = {
  title: "FIIT Advisory",
  description:
    "AI, Data, Technology Innovation & Business Modeling Consulting"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
