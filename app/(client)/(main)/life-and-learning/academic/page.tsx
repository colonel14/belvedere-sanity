import "@/styles/single-page.css";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getPage } from "@/lib/client";
const AcademicPage = dynamic(
  () => import("@/components/PageComponent/AcademicPage")
);

export const metadata: Metadata = {
  title: "Academic",
};
export default async function Academic() {
  const result = await getPage("Academic Page");

  return (
    <main>
      <AcademicPage result={result} />
    </main>
  );
}
