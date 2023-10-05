import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PortalsStaffPage = dynamic(
  () => import("@/components/PageComponent/PortalsStaffPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Portals - Staff",
};
export default async function PortalsStaff() {
  return (
    <main>
      <PortalsStaffPage />
    </main>
  );
}
