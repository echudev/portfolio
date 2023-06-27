import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "echudev",
  description: "Portfolio from Echudev, web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="antialiased">
        <Navigation />
        <main
          style={{ height: "calc(100vh - 60px)" }}
          className="flex flex-col items-center"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
