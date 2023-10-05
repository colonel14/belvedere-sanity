import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const DramaPage = dynamic(
  () => import("@/components/PageComponent/DramaPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Drama",
};
export default async function Drama() {
  const result = await getPage("Drama");
  return (
    <main>
      <DramaPage result={result} />
    </main>
  );
}
