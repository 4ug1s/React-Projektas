import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "Mano Įmonė",
    description: "Birių krovinių pervežimas ir sunkiosios technikos nuoma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="lt">
        <body className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-[80px]">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
