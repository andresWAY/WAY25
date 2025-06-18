import { Geist, Geist_Mono } from "next/font/google";
import "./style.scss";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Esto no es un regalo - WAY",
  description: "Landing de campaña 2025 para WAY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
         <>
      {/* Tipografía externa (Adobe Fonts) */}
      <link rel="stylesheet" href="https://use.typekit.net/qdn0maz.css" />

      {/* Metadatos básicos */}
      <title>WAY Landing 2025</title>
      <meta name="description" content="Landing de campaña 2025 para WAY" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph (para redes sociales) */}
      <meta property="og:title" content="WAY Landing 2025" />
      <meta property="og:description" content="Landing de campaña 2025 para WAY." />
      <meta property="og:image" content="https://tusubdominio.agenciaway.es/og-image.jpg" />
      <meta property="og:url" content="https://tusubdominio.agenciaway.es" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="WAY Landing 2025" />
      <meta name="twitter:description" content="Campaña visual y disruptiva de WAY 2025" />
      <meta name="twitter:image" content="https://tusubdominio.agenciaway.es/og-image.jpg" />

      {/* Accesibilidad */}
      <meta name="theme-color" content="#ae263a" />
    </>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
