import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const user=process.env.ADMIN_USER, password=process.env.ADMIN_PASSWORD;
  if(!user||!password)return new NextResponse("Set ADMIN_USER and ADMIN_PASSWORD to enable the portfolio admin.",{status:503});
  const header=request.headers.get("authorization");
  if(header?.startsWith("Basic ")){const decoded=atob(header.slice(6));const separator=decoded.indexOf(":");if(decoded.slice(0,separator)===user&&decoded.slice(separator+1)===password)return NextResponse.next();}
  return new NextResponse("Authentication required.",{status:401,headers:{"WWW-Authenticate":'Basic realm="Sandipan Portfolio Admin"'}});
}
export const config={matcher:["/admin/:path*","/api/admin/:path*"]};
