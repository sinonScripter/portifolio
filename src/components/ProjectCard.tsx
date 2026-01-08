"use client";

import Link from "next/link";
import "./ProjectCard.css";

type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function ProjectCard({ title, description, slug }: Props) {
  return (
    <Link href={`/cases/${slug}`} className="project-link">
      <div className="project-card">
        <div className="project-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <span className="project-arrow">→</span>
      </div>
    </Link>
  );
}
