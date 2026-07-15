import Project from "../components/Project";
import { myProjectsStatic } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = myProjectsStatic.map((staticData) => {
    const translated = t.projects.items.find((item) => item.id === staticData.id);
    return { ...staticData, ...translated };
  });

  return (
    <section id="projects" className="relative c-space pt-10 pb-40">
      <h2 className="text-heading">{t.projects.title}</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
