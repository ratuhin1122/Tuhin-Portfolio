import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Ruhul Amin Tuhin, a passionate web developer building high-performance modern web applications.',
  alternates: { canonical: '/About' },
  openGraph: { title: 'About | Tuhin Production', url: '/About' },
};

export default function AboutPage() {
  return <AboutClient />;
}
