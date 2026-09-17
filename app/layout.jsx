import "./globals.css";
import Analytics from "@/components/Analytics";
import CollectChat from "@/components/CollectChat";

export const metadata = {
  title: "ThinkVault — Wireframe",
  description: "Low-fidelity wireframe for the ThinkVault 15-page website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <CollectChat />
        {children}
      </body>
    </html>
  );
}
