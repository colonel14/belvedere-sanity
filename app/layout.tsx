import "@/app/globals.css";
import "@/styles/navbar.css";
import "@/styles/footer.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Belvedere School",
  description: "Belvedere School Cairo",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
