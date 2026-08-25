import "./globals.css";

export const metadata = {
  title: "Sai Swetha & Sai Santhosh | Wedding Invitation",
  description:
    "With hearts full of joy, we invite you to celebrate the wedding of Sai Swetha & Sai Santhosh — 4th September 2026, Lee Paradise Convention, Vizianagaram.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },   // ← change this line
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Sai Swetha & Sai Santhosh",
    description:
      "Join us as we celebrate the wedding of Sai Swetha & Sai Santhosh — 4th September 2026, Lee Paradise Convention, Vizianagaram.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=EB+Garamond:wght@400;500;600&family=Cinzel:wght@400;600&family=Herr+Von+Muellerhoff&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
