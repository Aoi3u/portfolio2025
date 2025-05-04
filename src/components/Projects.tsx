import Image from "next/image";

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
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-full aspect-video relative">
            <Image
              src="/img/ToDo.png"
              alt="タスク管理アプリ"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl text-white font-medium mb-3">
              <a
                href="https://laravel-to-do.vercel.app/tasks"
                className="hover:text-blue-300 transition"
              >
                タスク管理アプリ
              </a>
            </h3>
            <p className="text-blue-200 text-sm">
              LaravelでのCRUD操作習得のために作成した簡易タスク管理アプリ。データベースの改善を進めています。
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-full aspect-video relative">
            <Image
              src="/img/Blog.png"
              alt="ブログアプリ"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl text-white font-medium mb-3">
              <a
                href="https://tech-notes-waseda.vercel.app/"
                className="hover:text-blue-300 transition"
              >
                ブログアプリ
              </a>
            </h3>
            <p className="text-blue-200 text-sm">
              Next.jsを用いて作成したブログアプリ。Markdown形式での投稿が可能で、supabaseを利用してデータを管理しています。
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-105">
          <p className="text-xl text-blue-300 font-medium">Coming soon...</p>
        </div>
      </div>
    </section>
  );
}
