import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const BroadCurriculumPage = dynamic(
  () => import("@/components/PageComponent/BroadCurriculumPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "A Broad Curriculum",
};
export default async function LifeAndLearning() {
  return (
    <main>
      <BroadCurriculumPage />
    </main>
  );
}
