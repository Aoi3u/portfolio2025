import Link from 'next/link';

export default function Header() {
  return (
    <header className="header bg-slate-950/90 backdrop-blur-sm text-white shadow-lg w-full fixed z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-24">
        <h1>
          <div className="font-[var(--font-poppins)] text-sm md:text-base font-semibold">
            Aoi Miura
          </div>
          <div className="text-xs md:text-sm text-blue-300 font-medium">
            Web Developer | Student
          </div>
        </h1>
        <nav>
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <Link href="/#about" className="hover:text-blue-300 transition">About</Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-blue-300 transition">Projects</Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-blue-300 transition">Skills</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}