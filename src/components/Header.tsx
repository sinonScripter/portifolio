"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="logo">
        Leonardo Moreno
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <a
          href="https://drive.google.com/file/d/1MD_lR9Y1SufwfCNCjSgKjxO2StHt2G_z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
