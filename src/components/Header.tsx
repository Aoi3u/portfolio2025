"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header text-white w-full fixed z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-24">
        <h1>
          <div className="font-poppins text-sm md:text-base font-semibold">
            Aoi Miura
          </div>
          <div className="text-xs md:text-sm text-blue-300/90 font-medium">
            Web Developer | Student
          </div>
        </h1>
        <nav>
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <Link
                href="/#about"
                className="hover:text-blue-300 transition-colors py-2 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-blue-300 transition-colors py-2 relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                className="hover:text-blue-300 transition-colors py-2 relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
