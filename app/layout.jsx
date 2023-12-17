import "@/app/globals.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";

export const metadata = {
  title: "Belvedere School",
  description: "Belvedere School Cairo",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
