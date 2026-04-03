import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/_globals.scss";
import TopSlider from "@/components/common/TopSlider";
import SmoothScroll from "@/components/animations/SmoothScroll";
import MobileNav from "@/components/common/MobileNav";
import Cart from "@/components/cart/Cart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dhanalakshmi Ruchulu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <TopSlider />
        {children}
        <MobileNav />
        <Cart />
      </body>
    </html>
  );
}
