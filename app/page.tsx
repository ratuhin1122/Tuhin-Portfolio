import HomePage from "./Home/page"; 
import AboutPage from "./About/page";
import ProjectsPage from "./Projects/page";
import ExperiencePage from "./Experience/page";
import ContactPage from "./Contact/page";

export default function RootPage() {
  return (
    <main className="flex flex-col w-full bg-slate-950">
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ExperiencePage />
      <ContactPage />
    </main>
  );
}
