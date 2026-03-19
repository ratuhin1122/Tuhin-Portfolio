import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Shawon Production. A showcase of premium frontend engineering.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Home | Shawon Production', url: '/' },
};

export default function HomePage() {
  return <HomeClient />;
}
