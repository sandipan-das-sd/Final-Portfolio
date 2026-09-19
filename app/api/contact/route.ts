import { NextResponse } from "next/server";
import { saveMessage } from "@/lib/portfolio";

export async function POST(request:Request){
  let body:{name?:string;email?:string;subject?:string;message?:string};
  try{body=await request.json()}catch{return NextResponse.json({error:"Invalid request."},{status:400})}
  const input={name:(body.name??"").trim(),email:(body.email??"").trim(),subject:(body.subject??"").trim(),message:(body.message??"").trim()};
  if(!input.name||!/^\S+@\S+\.\S+$/.test(input.email)||!input.message)return NextResponse.json({error:"Name, a valid email and message are required."},{status:400});
  try{await saveMessage(input)}catch{return NextResponse.json({error:"Message storage is not configured yet. Please email directly."},{status:503})}
  if(process.env.RESEND_API_KEY){await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL||"Portfolio <onboarding@resend.dev>",to:["dsandipan3002@gmail.com"],reply_to:input.email,subject:`Portfolio: ${input.subject||"New message"}`,text:`From: ${input.name} <${input.email}>\n\n${input.message}`})});}
  return NextResponse.json({ok:true});
}
