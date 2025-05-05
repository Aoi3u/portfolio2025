import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
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
            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
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
              <p className="text-blue-200 text-sm">{project.description}</p>
            </div>
          </div>
        ))}

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-105">
          <p className="text-xl text-blue-300 font-medium">Coming soon...</p>
        </div>
      </div>
    </section>
  );
}
