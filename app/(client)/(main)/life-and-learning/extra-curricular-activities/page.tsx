import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ExtracurricularActivitiesPage = dynamic(
  () => import("@/components/PageComponent/ExtracurricularActivitiesPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Extra-curricular Activities",
};
export default async function LifeAndLearning() {
  return (
    <main>
      <ExtracurricularActivitiesPage />
    </main>
  );
}
