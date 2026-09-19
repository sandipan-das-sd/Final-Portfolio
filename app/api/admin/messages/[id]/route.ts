import { NextResponse } from "next/server";
import { deleteMessage } from "@/lib/portfolio";
type Params=Promise<{id:string}>;
export async function DELETE(_request:Request,{params}:{params:Params}){const id=Number((await params).id);if(!Number.isInteger(id))return NextResponse.json({error:"Invalid id."},{status:400});return await deleteMessage(id)?NextResponse.json({ok:true}):NextResponse.json({error:"Not found."},{status:404});}
