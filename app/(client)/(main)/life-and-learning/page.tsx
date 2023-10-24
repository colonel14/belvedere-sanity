import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LifeAndLearningPage = dynamic(
  () => import("@/components/PageComponent/LifeAndLearningPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Life & Learning",
};
export default async function LifeAndLearning() {
  const result = await getPage("Life & Learning");
  return (
    <main>
      <LifeAndLearningPage result={result} />
    </main>
  );
}
