import dynamic from "next/dynamic";

// Using next/dynamic for heavy Interactive Client components immediately forces code-splitting.
// Next.js chunks these files out of the main initial payload, skyrocketing performance.
const HomeClient = dynamic(() => import("./Home/HomeClient"), { ssr: true });
const AboutClient = dynamic(() => import("./About/AboutClient"), { ssr: true });
const ProjectsClient = dynamic(() => import("./Projects/ProjectsClient"), { ssr: true });
const ExperienceClient = dynamic(() => import("./Experience/ExperienceClient"), { ssr: true });
const ContactClient = dynamic(() => import("./Contact/ContactClient"), { ssr: true });

export default function RootPage() {
  return (
    <main className="flex flex-col w-full bg-slate-950 min-h-screen">
      <HomeClient />
      <AboutClient />
      <ProjectsClient />
      <ExperienceClient />
      <ContactClient />
    </main>
  );
}
