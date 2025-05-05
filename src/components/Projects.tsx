import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 mx-6 md:mx-12 lg:mx-24"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="section-card overflow-hidden transition-all duration-300 hover:transform hover:scale-102 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="w-full aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <h3 className="text-xl text-white font-medium mb-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:text-blue-300 transition"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-blue-200/90 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-900/20 text-blue-300/90 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-blue-900/20 text-blue-300/90 rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="section-card p-10 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-102">
          <p className="text-xl text-blue-300/90 font-medium">Coming soon...</p>
        </div>
      </div>
    </section>
  );
}
