import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Agarwal",
  description:
    "Uday Agarwal builds purposeful digital products across design, technology, and analytics.",
  openGraph: {
    title: "Uday Agarwal",
    description:
      "Selected work, experience, and ways to get in touch.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${GeistSans.variable} scroll-smooth`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
