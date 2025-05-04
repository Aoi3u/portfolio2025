export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", percentage: 40 },
    { name: "TypeScript", percentage: 35 },
    { name: "React", percentage: 30 },
    { name: "Next.js", percentage: 30 },
    { name: "PHP/Laravel", percentage: 30 },
  ];

  return (
    <section id="skills" className="py-24 mx-6 md:mx-12 lg:mx-24 mb-12">
      <div
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm text-blue-200">
                <span>{skill.name}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
