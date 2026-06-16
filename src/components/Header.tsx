"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <Link href="/" className="header__logo">
        Martin Le Roux
      </Link>
      
      <div className="header__actions">
        <Link
          href="/contact"
          className="btn btn--secondary text-sm"
        >
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
    </header>
  );
}
