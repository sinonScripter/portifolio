"use client";

import { useEffect, useState } from "react";

export default function RightClickLove() {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setPos({ x: e.clientX, y: e.clientY });
      setShow(true);
      setTimeout(() => setShow(false), 2500);
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () =>
      window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  if (!show) return null;

  return (
    <div
      className="love-message"
      style={{ top: pos.y, left: pos.x }}
    >
      feito com muito amor @2026💙
    </div>
  );
}
