import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/_globals.scss";
import TopSlider from "@/components/common/TopSlider";
import SmoothScroll from "@/components/animations/SmoothScroll";
import MobileNav from "@/components/common/MobileNav";
import Cart from "@/components/cart/Cart";
import Script from "next/script";
import Whatsapp from '@/public/assets/icons/whatsapp.svg'
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://venkatraogarivantillu.com"),
  title: {
    default: "Venkatraogari Vantillu | Homemade Andhra Foods & Pickles Online",
    template: "%s | Venkatraogari Vantillu | Homemade Andhra Foods & Pickles",
  },
  description:
    "Order authentic homemade Andhra foods and pickles, podis, snacks, and sweets online. Experience the traditional taste of Godavari and Konaseema foods with pure ingredients.",
  keywords: [
    "homemade foods online",
    "homemade pickles online",
    "andhra foods and pickles",
    "buy pickles online",
    "gongura pickle",
    "chicken pickle online",
    "venkatraogari vantillu",
    "konaseema foods",
    "godavari foods and pickles",
    "andhra sweets and snacks",
  ],
  openGraph: {
    title: "Venkatraogari Vantillu | Homemade Andhra Foods & Pickles Online",
    description:
      "Order authentic homemade Andhra foods and pickles, podis, snacks, and sweets online. Experience the traditional taste of Godavari and Konaseema foods with pure ingredients.",
    url: "https://venkatraogarivantillu.com",
    siteName: "Venkatraogari Vantillu",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkatraogari Vantillu | Homemade Andhra Foods & Pickles Online",
    description:
      "Order authentic homemade Andhra foods and pickles, podis, snacks, and sweets online. Experience the traditional taste of Godavari and Konaseema foods with pure ingredients.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Venkatraogari Vantillu",
              url: "https://venkatraogarivantillu.com",
              logo: "https://venkatraogarivantillu.com/favicon.ico",
              description:
                "Authentic homemade Andhra foods and pickles, podis, snacks, and sweets online.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Andhra Pradesh",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <TopSlider />
        {children}
        <MobileNav />
        <Cart />
        <Link href="https://wa.me/918333856713" target="_blank" className="whatsapp-icon">
          <Whatsapp />
        </Link>
      </body>
    </html>
  );
}
