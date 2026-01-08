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
        <Link href="/about">About</Link>
        <Link href="/cases">Cases</Link>
        <Link href="/play">Play</Link>
        <Link href="/resume">Resume</Link>
      </nav>
    </header>
  );
}
