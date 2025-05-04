export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-poppins)] font-bold leading-tight"
          data-aos="fade-up"
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"
          >
            Building Digital
          </span>
          <span className="block mt-2 text-white"> Solutions </span>
        </h2>
        <p
          className="mt-6 text-blue-200 text-lg md:text-xl max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Learning and growing in web development.
        </p>
      </div>
    </section>
  );
}