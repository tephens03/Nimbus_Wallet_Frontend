
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/common/Sidebar"
import "./globals.css";
import Header from "@/components/common/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nimbus Wallet",
  description: "Welcome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-green-900`}>

        <div className="flex h-screen">

          <Sidebar />

          <div className="flex flex-col flex-grow">

            <Header userFullName={"Gia Bao Tran"} />

            <main className="overflow-auto px-6 lg:px-9  flex-grow bg-black">



              {children}

            </main>

          </div>

        </div>

      </body>

    </html>
  );
}
