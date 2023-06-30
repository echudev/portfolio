import "./globals.css";
import Navigation from "../components/Navigation";
import localFont from "next/font/local";

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
      <body className="antialiased font-ubuntu text-neutral-200 max-w-4xl h-screen flex flex-col mx-auto">
        <Navigation />
        <main className="overflow-y-auto lg:mt-5">{children}</main>
      </body>
    </html>
  );
}
