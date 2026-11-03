"use client";

import { useEffect, useState } from "react";

type Reading = {
  envTop: string;
  envBottom: string;
  headerPaddingTop: string;
  headerTop: number;
  headerBottom: number;
  logoTop: number;
  scrollY: number;
  innerHeight: number;
  visualHeight: number | null;
  visualOffsetTop: number | null;
  standalone: boolean | undefined;
  viewportMeta: string;
};

function measure(): Reading {
  const probe = document.createElement("div");
  probe.style.cssText =
    "position:fixed;top:0;left:0;width:0;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)";
  document.body.appendChild(probe);
  const probeStyle = getComputedStyle(probe);

  const header = document.querySelector<HTMLElement>("header");
  const logo = document.querySelector<HTMLElement>("header a");
  const headerRect = header?.getBoundingClientRect();
  const logoRect = logo?.getBoundingClientRect();

  const reading: Reading = {
    envTop: probeStyle.paddingTop,
    envBottom: probeStyle.paddingBottom,
    headerPaddingTop: header ? getComputedStyle(header).paddingTop : "no header",
    headerTop: headerRect ? Math.round(headerRect.top) : -1,
    headerBottom: headerRect ? Math.round(headerRect.bottom) : -1,
    logoTop: logoRect ? Math.round(logoRect.top) : -1,
    scrollY: Math.round(window.scrollY),
    innerHeight: window.innerHeight,
    visualHeight: window.visualViewport ? Math.round(window.visualViewport.height) : null,
    visualOffsetTop: window.visualViewport ? Math.round(window.visualViewport.offsetTop) : null,
    standalone: window.navigator.standalone,
    viewportMeta:
      document.querySelector<HTMLMetaElement>('meta[name="viewport"]')?.content ?? "none",
  };

  probe.remove();
  return reading;
}

export default function SafeAreaDebugPage() {
  const [reading, setReading] = useState<Reading | null>(null);

  useEffect(() => {
    setReading(measure());
  }, []);

  return (
    <main
      id="main-content"
      style={{
        padding: "1rem",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: "13px",
        lineHeight: 1.5,
        background: "#ffffff",
        color: "#111111",
      }}
    >
      <h1 style={{ fontSize: "1.1rem", margin: "0 0 0.75rem" }}>Safe area reading</h1>
      {reading ? (
        <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
          {Object.entries(reading).map(([key, value]) => (
            <li key={key} style={{ wordBreak: "break-word" }}>
              <strong>{key}</strong>: {String(value)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Measuring…</p>
      )}
      <p style={{ marginTop: "1rem", color: "#555" }}>
        Take a screenshot of this page and send it back. This route is temporary.
      </p>
    </main>
  );
}
