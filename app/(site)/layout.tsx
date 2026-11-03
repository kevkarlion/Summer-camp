import type { ReactNode } from "react";

export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="site-canvas">{children}</div>;
}
