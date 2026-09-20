import { ImageResponse } from "next/og";

export const alt = "Sandipan Das — Full Stack and SAP ABAP Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#0d1511", color: "#f4f3ed", fontFamily: "Arial" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 30, fontWeight: 700 }}>
        <div style={{ width: 68, height: 68, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "#baff1a", color: "#0d1511", fontSize: 23 }}>SD</div>
        Sandipan Das
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ maxWidth: 1000, display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.02, letterSpacing: -3, fontWeight: 700 }}>
          <span>Full Stack Developer</span>
          <span style={{ color: "#baff1a" }}>&amp; SAP ABAP Engineer</span>
        </div>
        <div style={{ fontSize: 26, color: "#aeb7b1" }}>React · Node.js · Spring Boot · SAP ABAP · AI Engineering</div>
      </div>
      <div style={{ fontSize: 22, color: "#baff1a" }}>www.sandipandas.website</div>
    </div>,
    size,
  );
}
