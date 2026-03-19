import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Dive into my recent web development projects and source code repositories.',
  alternates: { canonical: '/Projects' },
  openGraph: { title: 'Projects | Tuhin Production', url: '/Projects' },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
