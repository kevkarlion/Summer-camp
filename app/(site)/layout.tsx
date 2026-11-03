import type { ReactNode } from "react";

import { LanguageProvider } from "@/components/home/LanguageProvider";

export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="site-canvas">
      <LanguageProvider>{children}</LanguageProvider>
    </div>
  );
}
