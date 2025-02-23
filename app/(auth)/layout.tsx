import type { Metadata } from "next";
import "../globals.css";
import ThemeProvider from "@/context/theme";

import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "DevConnect",
  description: "Empowering Solutions to pave the Digital Road",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
      <SessionProvider session={session}>
      <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
      </ThemeProvider>
      </main>

      <Toaster></Toaster>
      </SessionProvider>
  );
}
