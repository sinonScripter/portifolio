"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ViewTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.startViewTransition) return;

    document.startViewTransition(() => {});
  }, [pathname]);

  return <>{children}</>;
}
