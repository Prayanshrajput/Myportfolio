import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Prayansh Rajput | Software & AI Engineer",
  description: "Portfolio of Prayansh Rajput, a Software & AI Engineer specializing in Backend and Agentic AI based in Indore, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
