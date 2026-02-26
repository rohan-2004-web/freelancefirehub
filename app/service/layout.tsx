import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Varanasi | SEO, PPC, Social Media',
  description:
    'Comprehensive digital marketing services in Varanasi. Expert SEO optimization, PPC advertising, social media marketing, content marketing, web design, and video marketing solutions.',
  keywords: [
    'digital marketing services Varanasi',
    'SEO services',
    'PPC advertising',
    'social media marketing',
    'content marketing services',
    'web design',
    'video marketing',
  ],
  alternates: {
    canonical: 'https://freelancefirehub.vercel.app/service',
  },
  openGraph: {
    title: 'Digital Marketing Services in Varanasi',
    description: 'Professional digital marketing services including SEO, PPC, social media, content marketing, web design & video marketing.',
    url: 'https://freelancefirehub.vercel.app/service',
    type: 'website',
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
