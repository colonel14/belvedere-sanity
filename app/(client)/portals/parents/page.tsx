import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PortalsParentsPage = dynamic(
  () => import("@/components/PageComponent/PortalsParentsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Portals - Parents",
};
export default async function PortalsParents() {
  return (
    <main>
      <PortalsParentsPage />
    </main>
  );
}
