import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";
import Divider from "@/components/Divider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "echudev",
  description: "Portfolio Echudev web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <Divider />
        {children}
      </body>
    </html>
  );
}
