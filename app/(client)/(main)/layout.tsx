import Navbar from "@/components/Navbar";
import "../../globals.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
