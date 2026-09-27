"use client";
import { Bot, Check, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

export function LeadChatbot() {
  const [open, setOpen] = useState(false), [sent, setSent] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setError(""); const data = Object.fromEntries(new FormData(e.currentTarget));
    const message = `Source: Website assistant\nInterest: ${data.interest}\n\nRequirement:\n${data.requirement}`;
    try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.name, email: data.email, subject: `Chatbot lead · ${data.interest}`, message }) }); if (!response.ok) throw new Error("Could not save your request."); setSent(true); }
    catch (caught) { setError((caught as Error).message); } finally { setBusy(false); }
  }
  return <div className="lead-chat"><button className="chat-launcher" onClick={() => setOpen(value => !value)} aria-label={open ? "Close project assistant" : "Open project assistant"}>{open ? <X /> : <MessageCircle />}<span>Project assistant</span></button>{open && <aside className="chat-panel"><header><Bot /><div><b>Project assistant</b><span><i /> Online</span></div><button onClick={() => setOpen(false)} aria-label="Close"><X /></button></header>{sent ? <div className="chat-success"><Check /><b>You&apos;re all set.</b><p>Your requirement is in the admin panel. Expect a reply by email.</p></div> : <form onSubmit={submit}><p>Hi! Tell me what you want to improve. I&apos;ll send the details directly to Sandipan.</p><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>I&apos;m interested in<select name="interest"><option>Business automation / n8n</option><option>ERP / custom software</option><option>Website or web application</option><option>Mobile application</option><option>AI assistant</option><option>SAP integration</option></select></label><label>What should the solution do?<textarea name="requirement" rows={3} required /></label>{error && <small className="chat-error">{error}</small>}<button disabled={busy}>{busy ? "Sending…" : "Send requirement"}<Send /></button></form>}</aside>}</div>;
}
