import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const OurHistoryPage = dynamic(
  () => import("@/components/PageComponent/OurHistoryPage")
);

export const metadata: Metadata = {
  title: "Our History",
};
export default async function OurHistory() {
  const result = await getPage("Our History");

  return (
    <main>
      <OurHistoryPage result={result} />
    </main>
  );
}
