import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/theme";


export const metadata: Metadata = {
  title: "DevConnect",
  description: "Empowering Solutions to pave the Digital Road",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
