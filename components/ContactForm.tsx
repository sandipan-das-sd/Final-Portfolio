"use client";
import { ArrowUpRight, Check, LoaderCircle, Mail } from "lucide-react";
import { useMemo, useState } from "react";

const basePrices: Record<string, number> = { "Business website": 25000, "Web application / ERP": 85000, "Mobile application": 95000, "AI / chatbot": 60000, "n8n automation": 30000, "SAP / enterprise integration": 75000 };
const scopeFactor: Record<string, number> = { Starter: 1, Growth: 1.8, Enterprise: 3.2 };
const format = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [service, setService] = useState("Business website");
  const [scope, setScope] = useState("Starter");
  const estimate = useMemo(() => { const low = basePrices[service] * scopeFactor[scope]; return [Math.round(low / 1000) * 1000, Math.round(low * 1.45 / 1000) * 1000]; }, [service, scope]);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending"); setError("");
    const form = new FormData(e.currentTarget); const data = Object.fromEntries(form);
    const message = [`Company: ${data.company || "Not provided"}`, `Phone: ${data.phone || "Not provided"}`, `Service: ${service}`, `Industry: ${data.industry}`, `Scope: ${scope}`, `Timeline: ${data.timeline}`, `Indicative estimate: ${format(estimate[0])}–${format(estimate[1])}`, "", "Project requirement:", data.message].join("\n");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.name, email: data.email, subject: `${service} enquiry · ${data.industry}`, message }) });
      const body = await response.json(); if (!response.ok) throw new Error(body.error || "Unable to send your request."); setState("sent"); e.currentTarget.reset();
    } catch (caught) { setError((caught as Error).message); setState("idle"); }
  }
  if (state === "sent") return <div className="contact-form contact-sent"><Check /><h3>Requirement received.</h3><p>It is now available in the admin enquiry panel. I&apos;ll review it and reply soon.</p><a className="email-copy" href="mailto:dsandipan3002@gmail.com?subject=Project%20enquiry"><Mail size={16} /> Open email too</a><button type="button" onClick={() => setState("idle")}>Plan another project</button></div>;
  return <form className="contact-form estimate-form" onSubmit={submit}>
    <div className="form-heading"><span>Free project consultation</span><b>Get an indicative cost</b></div>
    <div className="contact-fields"><label>Your name<input name="name" required /></label><label>Work email<input name="email" type="email" required /></label><label>Company<input name="company" /></label><label>Phone / WhatsApp<input name="phone" /></label></div>
    <label>What do you need?<select name="service" value={service} onChange={e => setService(e.target.value)}>{Object.keys(basePrices).map(item => <option key={item}>{item}</option>)}</select></label>
    <div className="contact-fields"><label>Industry<select name="industry" defaultValue="Manufacturing"><option>Manufacturing</option><option>Tea industry</option><option>Food processing</option><option>Pharmaceuticals</option><option>Logistics</option><option>Retail</option><option>Education</option><option>Other</option></select></label><label>Project size<select name="scope" value={scope} onChange={e => setScope(e.target.value)}>{Object.keys(scopeFactor).map(item => <option key={item}>{item}</option>)}</select></label><label>Timeline<select name="timeline" defaultValue="1–3 months"><option>Less than 1 month</option><option>1–3 months</option><option>3–6 months</option><option>Flexible</option></select></label></div>
    <label>Describe your workflow or problem<textarea name="message" rows={4} required placeholder="What happens today, who uses it, and what should improve?" /></label>
    <div className="estimate-result"><span>Indicative project range</span><b>{format(estimate[0])} – {format(estimate[1])}</b><small>Planning estimate only. Final pricing follows a free requirement review.</small></div>
    {error && <p className="contact-error">{error} <a href="mailto:dsandipan3002@gmail.com">Email directly</a></p>}
    <button type="submit" disabled={state === "sending"}>{state === "sending" ? <LoaderCircle className="spin" /> : <ArrowUpRight />}{state === "sending" ? "Sending…" : "Request free consultation"}</button>
  </form>;
}
