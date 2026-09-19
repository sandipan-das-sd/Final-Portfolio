import { NextResponse } from "next/server";
import { createProject, isPortfolioDbConfigured, listProjects, type ProjectInput } from "@/lib/portfolio";

const parse=(body:Record<string,unknown>):ProjectInput=>({title:String(body.title??"").trim(),type:String(body.type??"").trim(),tech:Array.isArray(body.tech)?body.tech.map(String):String(body.tech??"").split(",").map(x=>x.trim()).filter(Boolean),text:String(body.text??"").trim(),href:String(body.href??"").trim(),image:String(body.image??"").trim(),position:Number(body.position??0),published:body.published!==false});
export async function GET(){return NextResponse.json({configured:isPortfolioDbConfigured(),projects:await listProjects(true)});}
export async function POST(request:Request){if(!isPortfolioDbConfigured())return NextResponse.json({error:"Database is not configured."},{status:503});const input=parse(await request.json());if(!input.title||!input.type||!input.text||!input.image)return NextResponse.json({error:"Title, type, description and image are required."},{status:400});return NextResponse.json({project:await createProject(input)},{status:201});}
