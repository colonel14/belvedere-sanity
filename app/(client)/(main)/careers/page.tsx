import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const CareersPage = dynamic(
  () => import("@/components/PageComponent/CareersPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Careers",
};
export default async function ContactUs() {
  return (
    <main>
      <CareersPage />
    </main>
  );
}
