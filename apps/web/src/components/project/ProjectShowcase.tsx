import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A full-stack application built with Next.js and TypeScript',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image: '/placeholder-1.jpg',
    link: '#'
  },
  // Add more projects...
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
        >
          View Project
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </article>
  );
};

const ProjectShowcase = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work, including web applications, 
            open-source projects, and technical writing.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;