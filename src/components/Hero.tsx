export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col items-center justify-center" data-aos="fade-up">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-80 animate-pulse"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-lg bg-blue-500/30 backdrop-blur-sm border border-blue-500/50 rotate-45"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-spin-slow" style={{ animationDelay: '0.5s', animationDirection: 'reverse' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-lg bg-indigo-500/30 backdrop-blur-sm border border-indigo-500/50 rotate-45"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-spin-slow" style={{ animationDelay: '1s' }}>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 rounded-lg bg-purple-500/30 backdrop-blur-sm border border-purple-500/50 rotate-45"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-spin-slow" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 rounded-lg bg-cyan-500/30 backdrop-blur-sm border border-cyan-500/50 rotate-45"></div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-blue-500/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-blue-500/10"></div>
          </div>

          <div className="flex gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>

          <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
            <a
              href="#projects"
              className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110"
            >
              <div className="w-6 h-10 rounded-full border-2 border-blue-500/50 flex items-start justify-center p-2">
                <div className="w-1 h-2 rounded-full bg-blue-500 animate-bounce"></div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400/70 group-hover:text-blue-400 transition-colors"
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
      </div>
    </section>
  );
}
