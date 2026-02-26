import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FloatingForm from "@/components/FloatingForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://freelancefirehub.vercel.app"),
  title: "freelance - Best Digital Marketing Agency in Varanasi | SEO & PPC Experts",
  description: "Top-rated digital marketing agency in Varanasi specializing in SEO optimization, social media marketing, PPC advertising, content marketing, and web design. 300% average ROI growth with 200+ successful campaigns.",
  keywords: [
    "digital marketing agency Varanasi",
    "best digital marketing agency",
    "SEO services Varanasi",
    "digital marketing services",
    "social media marketing",
    "PPC advertising",
    "content marketing",
    "web design Varanasi",
  ],
  authors: [{ name: "freelance Digital Marketing Agency" }],
  creator: "freelance",
  publisher: "freelance",
  applicationName: "freelance Digital Marketing",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://freelancefirehub.vercel.app",
    siteName: "freelance",
    title: "freelance - Best Digital Marketing Agency in Varanasi",
    description:
      "Professional digital marketing agency in Varanasi. SEO, Social Media, PPC, Content Marketing & Web Design. 300% Average ROI. 200+ Successful Campaigns.",
    images: [
      {
        url: "https://freelancefirehub.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "freelance Digital Marketing Agency",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "freelance - Best Digital Marketing Agency in Varanasi",
    description:
      "Professional digital marketing services in Varanasi. SEO, Social Media Marketing, PPC, Content Marketing & Web Design.",
    images: ["https://freelancefirehub.vercel.app/twitter-image.png"],
    creator: "@freelance",
    site: "@freelance",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Business",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "freelance Digital Marketing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://freelancefirehub.vercel.app" />
        <link rel="alternate" hrefLang="en-IN" href="https://freelancefirehub.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "freelance",
              image: "https://freelancefirehub.vercel.app/logo.png",
              description:
                "Best digital marketing agency in Varanasi providing SEO, social media marketing, PPC advertising, content marketing, and web design services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Varanasi",
                addressLocality: "Varanasi",
                addressRegion: "UP",
                postalCode: "221001",
                addressCountry: "IN",
              },
              telephone: "+91-7307260253",
              email: "info@freelance.com",
              url: "https://freelancefirehub.vercel.app",
              sameAs: [
                "https://www.facebook.com/freelance",
                "https://www.instagram.com/freelance",
                "https://www.linkedin.com/company/freelance",
                "https://twitter.com/freelance",
              ],
              areaServed: ["IN"],
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-main-text`}
      >
        <Navigation />
        {children}
        <Footer />
        <FloatingButtons />
        <FloatingForm />
      </body>
    </html>
  );
}
