import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for exciting new projects, collaborations, or career opportunities.',
  alternates: { canonical: '/Contact' },
  openGraph: { title: 'Contact | Tuhin Production', url: '/Contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
