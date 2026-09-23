import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Agarwal — Developer",
  description:
    "Uday Agarwal is a developer building clear, useful, and reliable digital products.",
  openGraph: {
    title: "Uday Agarwal — Developer",
    description:
      "Selected work, experience, education, and ways to get in touch.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
