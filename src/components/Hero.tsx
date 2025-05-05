export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight tracking-tight"
          data-aos="fade-up"
        >
          <span className="accent-gradient">Building Digital</span>
          <span className="block mt-2 text-white"> Solutions </span>
        </h2>
        <p
          className="mt-6 text-blue-200/90 text-lg md:text-xl max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Learning and growing in web development.
        </p>
        <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-full text-blue-300 transition-all duration-300 inline-flex items-center"
          >
            <span>View Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
