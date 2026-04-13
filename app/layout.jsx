import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/_globals.scss";
import TopSlider from "@/components/common/TopSlider";
import SmoothScroll from "@/components/animations/SmoothScroll";
import MobileNav from "@/components/common/MobileNav";
import Cart from "@/components/cart/Cart";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Venkatraogari Vantillu",
  description: "",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7QV49GVX69"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7QV49GVX69');
          `}
        </Script>
      </head>
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
