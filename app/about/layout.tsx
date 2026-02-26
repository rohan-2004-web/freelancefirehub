import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About freelance - Digital Marketing Agency Varanasi',
  description:
    'Learn about freelance, the best digital marketing agency in Varanasi. Discover our mission, vision, values, team, and proven track record of 300% ROI growth.',
  keywords: [
    'about freelance',
    'digital marketing agency about',
    'about us Varanasi',
    'team',
    'mission vision',
  ],
  alternates: {
    canonical: 'https://freelancefirehub.vercel.app/about',
  },
  openGraph: {
    title: 'About freelance - Digital Marketing Agency',
    description:
      'Discover the story, mission, and team behind Varanasi\'s leading digital marketing agency.',
    url: 'https://freelancefirehub.vercel.app/about',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
