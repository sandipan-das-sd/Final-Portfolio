import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/SolutionDetail";
import { automationPages, getAutomation } from "@/lib/solutions";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return automationPages.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const item=getAutomation((await params).slug);if(!item)return{};return{title:item.title,description:item.description,alternates:{canonical:`/automation/${item.slug}`}}}
export default async function AutomationDetail({params}:Props){const item=getAutomation((await params).slug);if(!item)notFound();const related=automationPages.filter(next=>next.slug!==item.slug).slice(0,3);return <SolutionDetail item={item} section="automation" related={related}/>}
