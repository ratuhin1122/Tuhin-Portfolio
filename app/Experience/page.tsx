import type { Metadata } from 'next';
import ExperienceClient from './ExperienceClient';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Explore my professional journey and the powerful technology stack I use daily.',
  alternates: { canonical: '/Experience' },
  openGraph: { title: 'Experience | Tuhin Production', url: '/Experience' },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
