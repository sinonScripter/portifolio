import FeaturedCases from "../../../components/FeaturedCases";
import { featuredCases } from "../../../data/featuredCases";

export default function CasesPage() {
  return (
    <main>
      <FeaturedCases cases={featuredCases} />
    </main>
  );
}

