"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "skills"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header text-white w-full fixed z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[rgba(10,15,30,0.85)] backdrop-blur-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-24">
        <Link href="/" className="group">
          <h1 className="relative overflow-hidden">
            <div className="font-poppins text-sm md:text-base font-semibold transform group-hover:-translate-y-full transition-transform duration-300">
              Aoi Miura
            </div>
            <div className="accent-gradient font-poppins text-sm md:text-base font-semibold absolute top-0 left-0 text-gradient transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              Aoi Miura
            </div>
          </h1>
          <div className="text-xs md:text-sm text-blue-300/90 font-medium">
            Web Developer
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-sm font-medium">
            {["about", "projects", "skills"].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item}`}
                  className={`py-2 relative group ${
                    activeSection === item
                      ? "text-blue-300"
                      : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => setActiveSection(item)}
                >
                  <span className="relative z-10">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-400/60 transform origin-left scale-x-0 transition-transform duration-300 ${
                      activeSection === item
                        ? "scale-x-100"
                        : "group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden relative w-8 h-6 flex flex-col justify-between z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>

        <div
          className={`fixed inset-0 bg-[rgba(10,15,30,0.97)] backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden z-40`}
        >
          <nav>
            <ul className="flex flex-col space-y-8 text-center">
              {["about", "projects", "skills"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item}`}
                    className={`text-2xl font-light ${
                      activeSection === item ? "text-blue-300" : "text-white"
                    }`}
                    onClick={() => {
                      setActiveSection(item);
                      setMenuOpen(false);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
