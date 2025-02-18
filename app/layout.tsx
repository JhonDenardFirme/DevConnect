import type { Metadata } from "next";
import "./globals.css";



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
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
