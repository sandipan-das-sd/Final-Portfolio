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
  return <div className={`lead-chat${open ? " is-open" : ""}`}><button className="chat-launcher" onClick={() => setOpen(value => !value)} aria-label={open ? "Close help form" : "Ask for help"}>{open ? <X /> : <MessageCircle />}<span>{open ? "Close" : "Ask for help"}</span></button><aside className="chat-panel" aria-hidden={!open}><header><div className="chat-avatar"><Bot /></div><div><b>Let&apos;s build something</b><span><i /> Usually replies by email</span></div><button onClick={() => setOpen(false)} aria-label="Close"><X /></button></header>{sent ? <div className="chat-success"><Check /><b>Message sent.</b><p>Thanks for sharing your idea. Sandipan will reply to your email soon.</p><button type="button" onClick={() => setSent(false)}>Send another message</button></div> : <form onSubmit={submit}><p>Tell me what you need and I&apos;ll help you find the right next step.</p><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>I&apos;m interested in<select name="interest"><option>Business automation / n8n</option><option>ERP / custom software</option><option>Website or web application</option><option>Mobile application</option><option>AI assistant</option><option>SAP integration</option></select></label><label>How can I help?<textarea name="requirement" rows={3} required /></label>{error && <small className="chat-error">{error}</small>}<button disabled={busy}>{busy ? "Sending…" : "Send message"}<Send /></button></form>}</aside></div>;
}
