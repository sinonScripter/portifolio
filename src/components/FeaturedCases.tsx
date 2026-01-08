"use client";

import Link from "next/link";
import "./FeaturedCases.css";

type Case = {
  title: string;
  company: string;
  year: string;
  description: string;
  image: string;
  slug: string;
};

type Props = {
  cases: Case[];
};

export default function FeaturedCases({ cases }: Props) {
  return (
    <section className="featured-cases">
      {cases.map((c) => (
        <Link key={c.slug} href={`/cases/${c.slug}`} className="case-card">
          <div className="case-image">
            <img src={c.image} alt={c.title} />
          </div>
          <div className="case-info">
            <h3>{c.title}</h3>
            <span>
              {c.company} · {c.year}
            </span>
            <p>{c.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
