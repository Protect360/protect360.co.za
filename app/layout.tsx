import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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