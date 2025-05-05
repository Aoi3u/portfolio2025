export default function Footer() {
  return (
    <footer className="footer text-center py-8 text-white w-full text-sm">
      <div className="container mx-auto px-6">
        <p className="text-blue-200/80">
          &copy; 2025 Aoi Miura. Personal portfolio.
        </p>
        <div className="mt-3 flex justify-center space-x-6">
          <a
            href="https://github.com/Aoi3u"
            className="text-blue-300/90 hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
          {/* <a
            href="#"
            className="text-blue-300/90 hover:text-blue-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="text-blue-300/90 hover:text-blue-300 transition-colors"
          >
            Contact
          </a> */}
        </div>
      </div>
    </footer>
  );
}
