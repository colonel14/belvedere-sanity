import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PortalsPupilsPage = dynamic(
  () => import("@/components/PageComponent/PortalsPupilsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Portals - Pupils",
};
export default async function PortalsPupils() {
  return (
    <main>
      <PortalsPupilsPage />
    </main>
  );
}
