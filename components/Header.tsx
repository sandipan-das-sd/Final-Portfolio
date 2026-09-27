"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Work", "/#work"], ["Automation", "/automation"], ["Industries", "/industries"], ["Services", "/services"], ["Résumé", "/#resume"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);
  return (
    <header className={`nav-wrap${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <Link className="brand" href="/#top" onClick={close}><span>SD</span> Sandipan Das</Link>
      <nav className={open ? "open" : ""} aria-label="Primary navigation">
        {links.map(([label, href]) => <Link href={href} onClick={close} key={href}>{label}</Link>)}
        <Link className="nav-cta" href="/#contact" onClick={close}>Free consultation <ArrowUpRight size={15} /></Link>
      </nav>
      <button className="mobile-menu" onClick={() => setOpen(value => !value)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
