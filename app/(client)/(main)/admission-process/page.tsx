import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AdmissionProcessPage = dynamic(
  () => import("@/components/PageComponent/AdmissionProcessPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Admissions Process",
};
export default async function AdmissionProcess() {
  return (
    <main>
      <AdmissionProcessPage />
    </main>
  );
}
