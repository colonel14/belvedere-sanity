import "../../globals.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";
import "@/styles/news-events.css";

import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Belvedere School",
  description: "Belvedere School Cairo",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
