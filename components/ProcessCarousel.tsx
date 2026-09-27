"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Code2, FlaskConical, PenTool, Rocket, Search, Users } from "lucide-react";

const icons=[Search,Users,PenTool,Code2,FlaskConical,Rocket];
export function ProcessCarousel({steps}:{steps:{title:string;text?:string}[]}){
 const [active,setActive]=useState(0),[paused,setPaused]=useState(false);
 useEffect(()=>{if(paused||steps.length<2)return;const timer=setInterval(()=>setActive(current=>(current+1)%steps.length),3200);return()=>clearInterval(timer)},[paused,steps.length]);
 const move=(amount:number)=>setActive(current=>(current+amount+steps.length)%steps.length);
 const step=steps[active],Icon=icons[active%icons.length];
 return <div className="process-carousel" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)}>
  <div className="process-stage" key={active}><div className="process-visual"><span>{String(active+1).padStart(2,"0")}</span><i><Icon/></i><small>Stage {active+1} of {steps.length}</small></div><div className="process-copy"><p>Current stage</p><h3>{step.title}</h3>{step.text&&<span>{step.text}</span>}</div></div>
  <div className="process-controls"><div>{steps.map((item,index)=><button key={item.title} className={index===active?"active":""} onClick={()=>setActive(index)} aria-label={`Show step ${index+1}: ${item.title}`}><span>{String(index+1).padStart(2,"0")}</span><i/></button>)}</div><span><button onClick={()=>move(-1)} aria-label="Previous step"><ArrowLeft/></button><button onClick={()=>move(1)} aria-label="Next step"><ArrowRight/></button></span></div>
 </div>
}
