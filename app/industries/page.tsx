import type { Metadata } from "next";
import { SolutionIndex } from "@/components/SolutionIndex";
import { industryPages } from "@/lib/solutions";
export const metadata:Metadata={title:"Industry-Specific Software Solutions",description:"Software solutions for manufacturing, tea, food processing, pharmaceuticals, logistics, retail and education.",alternates:{canonical:"/industries"}};
export default function IndustriesPage(){return <SolutionIndex type="industries" items={industryPages}/>}
