"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Hand } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  { title: "Hospital Management System", type: "Healthcare platform", tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"], text: "A secure hospital operations platform with role-based access for seven user types, covering appointments, prescriptions, billing and patient records.", href: "https://hospitalmangemntsystem.com/", image: "/generated/hospital-management-dashboard.png" },
  { title: "MelBuddy", type: "Social activity platform", tech: ["Node.js", "React Native", "MongoDB", "AWS"], text: "A social activity booking product with identity verification, payments, real-time notifications, moderation and scalable cloud integrations.", href: "https://www.melbuddy.com", image: "/work/melbuddy.jpg" },
  { title: "Real-Time Chat", type: "Communication product", tech: ["MERN", "Socket.io", "Redux", "JWT"], text: "A scalable chat application built for instant bidirectional communication, authenticated sessions and reliable concurrent conversations.", href: "https://github.com/sandipan-das-sd/MERN_ChatApp", image: "/work/chat-app.png" },
  { title: "Rental & Travel", type: "Booking platform", tech: ["React", "Node.js", "MongoDB", "REST API"], text: "A two-sided booking platform with owner and user dashboards, advanced filters, availability tracking and date-conflict validation.", href: "https://github.com/sandipan-das-sd/Rental", image: "/work/cloud-data.png" },
  { title: "Geo Attendance", type: "Location-based workforce app", tech: ["React Native", "GPS", "Geofencing", "REST API"], text: "A mobile attendance application using GPS geofencing for automatic check-in and check-out, live employee location tracking and secure attendance history.", image: "/generated/geo-attendance-app.png" },
  { title: "EMA Alert System", type: "Real-time trading alerts", tech: ["EMA 20", "Market Data", "Automation", "Signal Detection"], text: "An automated monitoring system that identifies EMA 20 breakouts, generates timely trade alerts and reduces false signals through optimized backend logic.", image: "/generated/ema-alert-dashboard.png" },
  { title: "Relic Atlas", type: "Archaeology community", tech: ["React", "Node.js", "Maps", "LiDAR"], text: "An archaeology community platform mapping Britain's finds with member dashboards and LiDAR-backed discovery tools.", href: "https://relicatlas.co.uk", image: "/work/relic-atlas.png" },
  { title: "Pulpit Fill", type: "Faith-tech marketplace", tech: ["iOS", "Android", "Firebase"], text: "A focused marketplace connecting churches with available preachers through a simple mobile experience.", href: "https://pulpitfill.com", image: "/work/pulpit-fill.png" },
  { title: "Infinite Laundry", type: "Service booking", tech: ["Web", "Booking", "Responsive UI"], text: "A premium laundry service experience with a clear marketing journey and frictionless service booking.", image: "/work/infinite-laundry.png" },
  { title: "Samprit Media", type: "Creative agency", tech: ["Web Design", "Brand", "Motion"], text: "A high-energy digital studio storefront designed to present creative services and turn attention into enquiries.", image: "/work/samprit-media.png" },
  { title: "SAP Freelance Hub", type: "Enterprise SAP", tech: ["SAP CPI", "ABAP", "MII"], text: "An enterprise SAP practice covering integration, development and specialist technical services.", href: "https://sap.gyanoda.com", image: "/work/sap-freelance-hub-mii.png" },
  { title: "BillBnk", type: "Fintech application", tech: ["React Native", "KYC", "Wallet", "AEPS"], text: "Agent banking, bill payments, AEPS, wallet operations and multi-bank payouts brought into one mobile product.", image: "/work/billbank.jpg" },
  { title: "EarnHub", type: "Freelance marketplace", tech: ["Full Stack", "Marketplace", "Matching"], text: "A freelance marketplace that makes client and skilled-professional discovery simpler on both sides.", image: "/work/earnhub.png" },
];

export function ProjectSlider() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const move = (direction: number) => setActive(current => (current + direction + projects.length) % projects.length);
  const project = projects[active];

  return (
    <div className="project-slider" onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1); touchStart.current = null; }}>
      <article className="project-slide" key={project.title}>
        <div className="slide-image"><Image src={project.image} alt={`${project.title} project preview`} fill priority={active === 0} sizes="(max-width: 700px) 92vw, 42vw" /><span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></div>
        <div className="slide-copy">
          <p className="slide-type">{project.type}</p>
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="tech-tags">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
          {project.href && <a href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={17} /></a>}
        </div>
      </article>
      <div className="swipe-hint" aria-hidden="true"><span>More projects</span><Hand /><ArrowRight /></div>
      <div className="slider-nav">
        <div>{projects.map((item, index) => <button className={index === active ? "active" : ""} key={item.title} onClick={() => setActive(index)} aria-label={`Show ${item.title}`} />)}</div>
        <span><button onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft /></button><button onClick={() => move(1)} aria-label="Next project"><ArrowRight /></button></span>
      </div>
    </div>
  );
}
