import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const SportsPage = dynamic(
  () => import("@/components/PageComponent/SportsPage")
);

export const metadata: Metadata = {
  title: "Sports",
};
export default async function Sports() {
  const result = await getPage("Sports");

  return (
    <main>
      <SportsPage result={result} />
    </main>
  );
}
