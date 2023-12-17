import { getPage, getPageDynamic } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ValuesAndEthosPage = dynamic(
  () => import("@/components/PageComponent/ValuesAndEthosPage")
);

export const metadata: Metadata = {
  title: "Values and Ethos",
};
export default async function VisionAndMission() {
  const result = await getPageDynamic("Values and Ethos");
  return (
    <main>
      <ValuesAndEthosPage result={result} />
    </main>
  );
}
