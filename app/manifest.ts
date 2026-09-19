import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sandipan Das — Full Stack Developer",
    short_name: "Sandipan Das",
    description: "Portfolio of Sandipan Das, Full Stack and SAP ABAP Developer in Kolkata.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f3ed",
    theme_color: "#0d1511",
  };
}
