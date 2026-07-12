import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajeyata Maurya — CSE-DS Student & AI Developer",
  description: "test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ ["--font-space-grotesk" as any]: "'Segoe UI', sans-serif", ["--font-inter" as any]: "'Segoe UI', sans-serif", ["--font-jetbrains" as any]: "'Courier New', monospace" }}>
      <body className="font-body bg-ink text-paper antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
