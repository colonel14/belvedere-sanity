import "../../globals.css";
import "@/styles/portals.css";
import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
