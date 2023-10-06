import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const TeachingMethodologyPage = dynamic(
  () => import("@/components/PageComponent/TeachingMethodologyPage")
);

export const metadata: Metadata = {
  title: "Teaching Methodology",
};

export default async function SecondarySchool() {
  const result = await getPage("Teaching Methodology");
  return (
    <main>
      <TeachingMethodologyPage result={result} />
    </main>
  );
}
