import "./globals.css";
import Navigation from "./components/Navigation";
import localFont from "next/font/local";
import { Suspense } from "react";
import Analytics from "./components/Analytics";

const ubuntu = localFont({
  src: [
    {
      path: "../public/font/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Ezequiel M.",
  description: "Portfolio from Ezequiel M. (github.com/echudev), web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${ubuntu.variable}`}>
      <body className="antialiased font-ubuntu text-neutral-300 h-screen max-w-2xl mx-auto flex flex-col items-center backdrop-blur-xl bg-opacity-20 border border-neutral-800 bg-neutral-900 shadow-xl shadow-black rounded-xl selection:bg-orange-800">
        <Suspense>
          <Analytics />
        </Suspense>
        <Navigation />
        <main className="w-full overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
