"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__anchors">
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("processes")}
          className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          Processes
        </button>
        <button
          onClick={() => scrollToSection("career")}
          className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          Career History
        </button>
      </div>

      <div className="footer__actions">
        <Link href="/contact" className="btn btn--secondary text-sm">
          Get in Touch
        </Link>
        <Link
          href="https://www.linkedin.com/in/martin-le-roux/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary text-sm"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
