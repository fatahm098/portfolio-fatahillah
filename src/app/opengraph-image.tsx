import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#10141a",
          color: "#dfe2eb",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              alignItems: "center",
              border: "1px solid rgba(0,240,255,0.35)",
              borderRadius: 4,
              color: "#00f0ff",
              display: "flex",
              fontSize: 22,
              height: 56,
              justifyContent: "center",
              letterSpacing: 2,
              width: 56,
            }}
          >
            {site.monogram}
          </div>
          <div
            style={{
              color: "#4fdbc8",
              display: "flex",
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {site.heroLabel}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#dbfcff",
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              color: "#b9cacb",
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #3b494b",
            color: "#849495",
            display: "flex",
            fontSize: 22,
            justifyContent: "space-between",
            paddingTop: 24,
            width: "100%",
          }}
        >
          <span>{site.contact.githubHandle}</span>
          <span>{site.contact.email}</span>
        </div>
      </div>
    ),
    size,
  );
}
