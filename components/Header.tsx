"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Work", "/#work"], ["Services", "/services"], ["Education", "/#education"], ["Résumé", "/#resume"],
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
      <a className="brand" href="/#top" onClick={close}><span>SD</span> Sandipan Das</a>
      <nav className={open ? "open" : ""} aria-label="Primary navigation">
        {links.map(([label, href]) => <a href={href} onClick={close} key={href}>{label}</a>)}
        <a className="nav-cta" href="mailto:dsandipan3002@gmail.com" onClick={close}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="mobile-menu" onClick={() => setOpen(value => !value)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
