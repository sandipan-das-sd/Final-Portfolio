import type { Metadata } from "next";
import { SolutionIndex } from "@/components/SolutionIndex";
import { automationPages } from "@/lib/solutions";
export const metadata:Metadata={title:"Business Automation & ERP Solutions",description:"n8n automation, custom ERP, AI assistants, integrations, dashboards and cloud deployment by Sandipan Das.",alternates:{canonical:"/automation"}};
export default function AutomationPage(){return <SolutionIndex type="automation" items={automationPages}/>}
