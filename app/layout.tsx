import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import Script from "next/script";

// Optimize Google Fonts by forcing swap behavior. Eliminates CLS (Cumulative Layout Shift)
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], display: "swap", variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Home | Tuhin Production",
    template: "%s | Tuhin Production",
  },
  description: "Senior Frontend Developer Portfolio. Explore modern web applications built dynamically with Next.js, Tailwind CSS, and Aceternity UI.",
  keywords: ["Frontend", "React", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Tuhin Production" }],
  creator: "Tuhin Production",
  metadataBase: new URL('https://tuhinproduction.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Home | Tuhin Production",
    description: "Senior Frontend Developer Portfolio building modern digital experiences.",
    siteName: "Tuhin Production",
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} ${outfit.variable} bg-background text-foreground antialiased`}>
        <Navbar />
        {children}

        {/* Analytics deferred deeply to prioritize LCP rendering block */}
        <Script 
          id="gtag-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
