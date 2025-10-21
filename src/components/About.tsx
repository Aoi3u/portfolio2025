import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 mx-6 md:mx-12 lg:mx-24">
      <div className="section-card p-8 md:p-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Image
            src="/img/about.jpg"
            alt="プロフィール写真"
            width={160}
            height={160}
            className="rounded-full ring-2 ring-blue-500/20"
          />
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl text-white font-medium">
              三浦 碧生 / Aoi Miura
            </h3>
            <p className="text-blue-200/90 leading-relaxed max-w-2xl">
              東京のCS専攻大学生。大学2年生の秋からWeb開発の基礎を学び始めました。個人プロジェクトやインターンでの学習を通じて継続的に成長することを心がけています。将来的には、実務経験を積みながら、様々なプロジェクトに貢献していきたいと考えています。
            </p>
            <a
              href="https://github.com/Aoi3u"
              className="inline-flex items-center text-blue-300 hover:text-blue-400 transition"
            >
              <span>GitHub Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
