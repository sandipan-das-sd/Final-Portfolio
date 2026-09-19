import type { Metadata } from "next";
import { AdminPortfolio } from "@/components/AdminPortfolio";
import { getResumeUrl, isPortfolioDbConfigured, listProjects } from "@/lib/portfolio";
export const metadata:Metadata={title:"Portfolio Admin",robots:{index:false,follow:false}};
export const dynamic="force-dynamic";
export default async function AdminPage(){const configured=isPortfolioDbConfigured();return <AdminPortfolio configured={configured} initialProjects={await listProjects(true)} initialResume={await getResumeUrl()}/>;}
