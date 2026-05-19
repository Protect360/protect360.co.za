"use client";

import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ React hydration theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* ✅ Prevent white flash before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', savedTheme);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
