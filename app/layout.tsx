"use client";

import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );
  }, []);

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme =
                  localStorage.getItem('theme') || 'light';

                document.documentElement.setAttribute(
                  'data-theme',
                  theme
                );
              } catch(e) {}
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}