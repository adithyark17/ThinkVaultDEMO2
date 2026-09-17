import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata = {
  title: "ThinkVault — Wireframe",
  description: "Low-fidelity wireframe for the ThinkVault 15-page website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
