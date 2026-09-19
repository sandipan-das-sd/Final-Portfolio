"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Hand } from "lucide-react";
import { useRef, useState } from "react";
import type { PortfolioProject } from "@/lib/portfolio";

export function ProjectSlider({ projects }: { projects: PortfolioProject[] }) {
  const [active,setActive]=useState(0); const touchStart=useRef<number|null>(null);
  const index=Math.min(active,Math.max(0,projects.length-1));
  const move=(direction:number)=>setActive(current=>(current+direction+projects.length)%projects.length);
  const project=projects[index]; if(!project)return <p>No published projects yet.</p>;
  return <div className="project-slider" onTouchStart={e=>{touchStart.current=e.touches[0].clientX}} onTouchEnd={e=>{if(touchStart.current===null)return;const d=e.changedTouches[0].clientX-touchStart.current;if(Math.abs(d)>45)move(d>0?-1:1);touchStart.current=null}}>
    <article className="project-slide" key={project.id}>
      <div className="slide-image"><Image src={project.image} alt={`${project.title} project preview`} fill priority={index===0} sizes="(max-width: 700px) 92vw, 42vw" unoptimized={project.image.startsWith("http")}/><span>{String(index+1).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}</span></div>
      <div className="slide-copy"><p className="slide-type">{project.type}</p><h3>{project.title}</h3><p>{project.text}</p><div className="tech-tags">{project.tech.map(item=><span key={item}>{item}</span>)}</div>{project.href&&<a href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={17}/></a>}</div>
    </article>
    <div className="swipe-hint" aria-hidden="true"><span>More projects</span><Hand/><ArrowRight/></div>
    <div className="slider-nav"><div>{projects.map((item,i)=><button className={i===index?"active":""} key={item.id} onClick={()=>setActive(i)} aria-label={`Show ${item.title}`}/>)}</div><span><button onClick={()=>move(-1)} aria-label="Previous project"><ArrowLeft/></button><button onClick={()=>move(1)} aria-label="Next project"><ArrowRight/></button></span></div>
  </div>;
}
