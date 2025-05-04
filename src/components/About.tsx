import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 mx-6 md:mx-12 lg:mx-24">
      <div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Image
            src="/img/about.jpg"
            alt="プロフィール写真"
            width={160}
            height={160}
            className="rounded-full ring-4 ring-blue-500/20"
          />
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl text-white font-medium">
              三浦 碧生 / Aoi Miura
            </h3>
            <p className="text-blue-200 leading-relaxed max-w-2xl">
              東京のCS専攻大学生。大学2年生の秋からWeb開発の基礎を学び始め、バックエンド領域に特に興味があります。
              個人プロジェクトやインターンでの学習を通じて継続的に成長することを心がけています。
              将来的には、実務経験を積みながら、様々なプロジェクトに貢献していきたいと考えています。
            </p>
            <a
              href="https://github.com/Aoi3u"
              className="inline-block text-blue-300 hover:text-blue-400 transition"
            >
              GitHub Profile →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
