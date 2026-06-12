import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FIIT Advisory",
    template: "%s | FIIT Advisory"
  },
  description:
    "AI, Data, Technology Innovation and Business Modeling Consulting.",
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
