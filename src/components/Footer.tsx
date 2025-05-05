import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-center py-10 text-white w-full relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-blue-500/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-indigo-500/3 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="my-6">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link
              href="/#about"
              className="text-blue-200/80 hover:text-blue-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-blue-200/80 hover:text-blue-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="text-blue-200/80 hover:text-blue-300 transition-colors"
            >
              Skills
            </Link>
          </nav>
        </div>

        <div className="flex justify-center space-x-6 my-6">
          <a
            href="https://github.com/Aoi3u"
            className="text-blue-100/70 hover:text-blue-300 transition-colors w-10 h-10 flex items-center justify-center rounded-full border border-blue-500/20 hover:border-blue-500/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>

        <div className="mt-8 text-blue-200/70 text-sm">
          <p>© {currentYear} Aoi Miura. Personal portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
