import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sandipandas.website"),
  title: {
    default: "Sandipan Das | Full Stack Developer & SAP ABAP Developer",
    template: "%s | Sandipan Das",
  },
  description: "Portfolio of Sandipan Das, a full stack developer in Kolkata specialising in React, Node.js, Spring Boot, MongoDB, AWS, real-time applications and SAP ABAP.",
  applicationName: "Sandipan Das Portfolio",
  authors: [{ name: "Sandipan Das" }],
  creator: "Sandipan Das",
  publisher: "Sandipan Das",
  keywords: [
    "Sandipan Das", "Full Stack Developer Kolkata", "MERN Stack Developer",
    "React Developer Kolkata", "Node.js Developer", "Spring Boot Developer",
    "SAP ABAP Developer", "Java Developer", "React Native Developer",
    "Software Developer West Bengal", "Sandipan Das portfolio",
  ],
  category: "technology",
  verification: {
    google: "dAYpa0HUor-Auc_frAIcpNbKhrB99HCMOMGvz7FwlbM",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "profile",
    title: "Sandipan Das — Full Stack & SAP ABAP Developer",
    description: "Full-stack products, scalable APIs, mobile applications and SAP ABAP solutions built by Sandipan Das.",
    siteName: "Sandipan Das Portfolio",
    locale: "en_IN",
    url: "https://sandipandas.website",
    images: [{ url: "/generated/sandipan-professional-portrait-v2.png", width: 1024, height: 1536, alt: "Sandipan Das — Full Stack and SAP ABAP Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandipan Das — Full Stack & SAP ABAP Developer",
    description: "Explore full-stack, mobile, real-time and SAP ABAP projects by Sandipan Das.",
    images: ["/generated/sandipan-professional-portrait-v2.png"],
  },
  alternates: { canonical: "/", languages: { "en-IN": "/" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sandipandas.website/#person",
    url: "https://sandipandas.website",
    name: "Sandipan Das",
    jobTitle: "Full Stack Developer",
    description: "Full Stack and SAP ABAP developer based in Kolkata, India.",
    image: "https://sandipandas.website/generated/sandipan-professional-portrait-v2.png",
    email: "mailto:dsandipan3002@gmail.com",
    telephone: "+91-8335019404",
    address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressRegion: "West Bengal", addressCountry: "IN" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Future Institute of Engineering and Management" },
    knowsAbout: ["Java", "JavaScript", "React", "Node.js", "Spring Boot", "MongoDB", "AWS", "SAP ABAP", "Open SQL"],
    sameAs: ["https://github.com/sandipan-das-sd", "https://linkedin.com/in/sandipan-das-13968b1b0", "https://leetcode.com/u/sandipanbabu/"],
  };
  return (
    <html lang="en">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} /></body>
    </html>
  );
}
