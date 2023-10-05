import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const MusicPage = dynamic(
  () => import("@/components/PageComponent/MusicPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Music",
};
export default async function Music() {
  const result = await getPage("Music");

  return (
    <main>
      <MusicPage result={result} />
    </main>
  );
}
