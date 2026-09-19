import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { setResumeUrl } from "@/lib/portfolio";

export async function POST(request:Request){
  if(!process.env.BLOB_READ_WRITE_TOKEN)return NextResponse.json({error:"Set BLOB_READ_WRITE_TOKEN to enable file uploads."},{status:503});
  const data=await request.formData(),file=data.get("file"),kind=String(data.get("kind")??"thumbnail");
  if(!(file instanceof File))return NextResponse.json({error:"Choose a file."},{status:400});
  const allowed=kind==="resume"?["application/pdf"]:["image/jpeg","image/png","image/webp","image/gif"];
  if(!allowed.includes(file.type))return NextResponse.json({error:kind==="resume"?"Résumé must be a PDF.":"Thumbnail must be JPG, PNG, WebP or GIF."},{status:400});
  if(file.size>8*1024*1024)return NextResponse.json({error:"File must be under 8 MB."},{status:400});
  const blob=await put(`sandipan-portfolio/${kind}/${file.name}`,file,{access:"public",addRandomSuffix:true});
  if(kind==="resume")await setResumeUrl(blob.url);
  return NextResponse.json({url:blob.url});
}
