import type { Metadata } from "next";
import ThemeProvider from "@/context/theme";
import Navbar from "@/components/navigation/navbar";
import DesktopNavigation from "@/components/navigation/navbar/DesktopNavigation";


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
          <Navbar></Navbar>
          <DesktopNavigation></DesktopNavigation>
          <div className="md:ml-72">
            {children}
          </div>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
