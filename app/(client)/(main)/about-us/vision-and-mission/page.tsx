import { getPageDynamic } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const VisionAndMissionPage = dynamic(
  () => import("@/components/PageComponent/VisionAndMissionPage")
);

export const metadata: Metadata = {
  title: "Vision & Mission",
};
export default async function VisionAndMission() {
  const result = await getPageDynamic("Vision & Mission");
  return (
    <main>
      <VisionAndMissionPage result={result} />
    </main>
  );
}
