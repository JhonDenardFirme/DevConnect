import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/theme";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "LogiCode",
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
          <Navbar></Navbar>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
