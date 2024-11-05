import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const fontPoppins = Poppins ({
  subsets: ["latin"],
  weight : ["300", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Web Wave Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${fontPoppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
