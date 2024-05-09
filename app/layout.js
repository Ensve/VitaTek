import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/nav/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='relative overflow-hidden'>
            {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
