import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const SecondarySchoolPage = dynamic(
  () => import("@/components/PageComponent/SecondarySchoolPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Secondary School",
};

export default async function SecondarySchool() {
  const result = await getPage("Secondary School");

  return (
    <main>
      <SecondarySchoolPage result={result} />
    </main>
  );
}
