import {  getPageDynamic } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const EarlyYearsFoundationPage = dynamic(
  () => import("@/components/PageComponent/EarlyYearsFoundationPage")
);

export const metadata: Metadata = {
  title: "Early Years Foundation Stage",
};

export default async function EarlyYearsFoundation() {
  const result = await getPageDynamic("Early Years");

  return (
    <main>
      <EarlyYearsFoundationPage result={result} />
    </main>
  );
}
