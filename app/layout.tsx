import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const ubuntu = Ubuntu({
  weight: ["300","400","500","700"],
  style: ["normal", "italic"],
  subsets: ['latin']
});



export const metadata: Metadata = {
  title: "Anuoluwapo Akinlawon",
  description: "A Next JS Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} ${ubuntu.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
