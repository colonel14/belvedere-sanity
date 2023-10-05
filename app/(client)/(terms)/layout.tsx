import Navbar from "@/components/Navbar";
import "../../globals.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";
import type { Metadata } from "next";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Belvedere School",
  description: "Belvedere School Cairo",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app__terms">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
