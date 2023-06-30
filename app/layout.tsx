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
      <body className="antialiased font-ubuntu text-neutral-300 h-screen flex flex-col items-center">
        <Navigation />
        <main className="w-full overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
