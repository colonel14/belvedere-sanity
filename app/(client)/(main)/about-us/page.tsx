import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutUsPage = dynamic(
  () => import("@/components/PageComponent/AboutUsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "About Us",
};
export default async function AboutUs() {
  const result = await getPage("About Us");
  return (
    <main>
      <AboutUsPage result={result} />
    </main>
  );
}
