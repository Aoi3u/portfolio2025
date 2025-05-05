import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="pt-28 pb-16 mx-6 md:mx-12 lg:mx-24">
      <Link
        href="/#projects"
        className="text-blue-300 hover:text-blue-400 transition mb-6 inline-block"
      >
        ← プロジェクト一覧に戻る
      </Link>

      <div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {project.title}
        </h1>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-800/30 text-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-6 text-blue-200">
          <p className="text-lg">{project.description}</p>
          <p>{project.detailedDescription}</p>

          <div>
            <h2 className="text-xl text-white font-medium mb-3">
              課題と解決策
            </h2>
            <p>{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-xl text-white font-medium mb-3">学んだこと</h2>
            <p>{project.learnings}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              サイトを見る
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
