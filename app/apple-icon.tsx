import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0d1511", borderRadius: 40 }}>
      <div style={{ width: 132, height: 132, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: "#baff1a", color: "#0d1511", fontFamily: "Arial", fontSize: 52, fontWeight: 700 }}>SD</div>
    </div>,
    size,
  );
}
