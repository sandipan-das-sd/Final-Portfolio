"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["Automation", "/automation"],
  ["Industries", "/industries"],
  ["Services", "/services"],
  ["Résumé", "/#resume"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setOpen(false);
    if (pathname !== "/" || !href.startsWith("/#")) return;
    const id = href.slice(2);
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    window.requestAnimationFrame(() =>
      target.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };
  return (
    <header
      className={`nav-wrap${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <Link
        className="brand"
        href="/#top"
        onClick={(event) => navigate(event, "/#top")}
      >
        <span>SD</span> Sandipan Das
      </Link>
      <nav className={open ? "open" : ""} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link
            className={
              pathname === href ||
              (href !== "/#work" && pathname.startsWith(href))
                ? "active"
                : ""
            }
            href={href}
            onClick={(event) => navigate(event, href)}
            key={href}
          >
            {label}
          </Link>
        ))}
        <Link
          className="nav-cta"
          href="/#contact"
          onClick={(event) => navigate(event, "/#contact")}
        >
          Free consultation <ArrowUpRight size={15} />
        </Link>
      </nav>
      <button
        className="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
