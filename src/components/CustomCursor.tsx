"use client";

import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // só desktop
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleHover = () => cursor.classList.add("hover");
    const handleLeave = () => cursor.classList.remove("hover");

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll(".project-card").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    move();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
