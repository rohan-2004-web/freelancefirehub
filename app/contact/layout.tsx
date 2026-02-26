import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact freelance - Get in Touch | Digital Marketing Agency Varanasi',
  description:
    'Contact freelance, the leading digital marketing agency in Varanasi. Get in touch for free consultation on SEO, PPC, social media marketing, and web design services.',
  keywords: [
    'contact us Varanasi',
    'digital marketing contact',
    'contact freelance',
    'free consultation',
  ],
  alternates: {
    canonical: 'https://freelancefirehub.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact freelance - Get in Touch',
    description:
      'Contact the best digital marketing agency in Varanasi. Schedule your free consultation today.',
    url: 'https://freelancefirehub.vercel.app/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
