import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const CareersPage = dynamic(
  () => import("@/components/PageComponent/CareersPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Careers",
};
export default async function Careers() {

  redirect('/')
  return (
    <main>
      
      {/* <CareersPage /> */}
    </main>
  );
}
