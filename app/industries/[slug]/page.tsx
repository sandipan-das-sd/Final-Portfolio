import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/SolutionDetail";
import { getIndustry, industryPages } from "@/lib/solutions";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return industryPages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getIndustry((await params).slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/industries/${item.slug}` },
  };
}
export default async function IndustryDetail({ params }: Props) {
  const item = getIndustry((await params).slug);
  if (!item) notFound();
  const related = industryPages
    .filter((next) => next.slug !== item.slug)
    .slice(0, 3);
  return <SolutionDetail item={item} section="industries" related={related} />;
}
