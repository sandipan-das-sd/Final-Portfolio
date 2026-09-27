"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Code2, PenTool, Rocket, Search } from "lucide-react";

const icons=[Search,PenTool,Code2,Rocket];
export function ProcessCarousel({steps}:{steps:{title:string;text?:string}[]}){
 const four=steps.slice(0,4),[active,setActive]=useState(0),[paused,setPaused]=useState(false),track=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(paused||four.length<2)return;const timer=setInterval(()=>setActive(current=>(current+1)%four.length),1800);return()=>clearInterval(timer)},[paused,four.length]);
 useEffect(()=>{if(window.innerWidth<=560)(track.current?.children[active] as HTMLElement|undefined)?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},[active]);
 return <div className="process-card-flow" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)}>
  <div className="process-card-track" ref={track}>{four.map((step,index)=>{const Icon=icons[index];return <div className={`process-flow-item${index===active?" active":""}`} key={step.title}><article onClick={()=>setActive(index)}><div><span>{String(index+1).padStart(2,"0")}</span><i><Icon/></i></div><h3>{step.title}</h3>{step.text&&<p>{step.text}</p>}<small>{index===active?"In focus":"Step "+(index+1)}</small></article>{index<four.length-1&&<ArrowRight className="flow-connector"/>}</div>})}</div>
  <div className="process-flow-progress">{four.map((step,index)=><button key={step.title} className={index===active?"active":""} onClick={()=>setActive(index)} aria-label={`Show ${step.title}`}><i/></button>)}</div>
 </div>
}
