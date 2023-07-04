import "./globals.css";
import Navigation from "./components/Navigation";
import localFont from "next/font/local";
import { Suspense } from "react";
import Loading from "./loading";

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
      <body className="antialiased font-ubuntu text-neutral-300 h-screen max-w-2xl mx-auto flex flex-col items-center backdrop-blur-md bg-opacity-5 bg-neutral-400 shadow-xl rounded-xl">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <main className="w-full overflow-y-auto">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
