import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const CookiePolicyPage = dynamic(
  () => import("@/components/PageComponent/CookiePolicyPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Cookie Policy",
};
export default async function PrivacyPolicy() {
  return (
    <main>
      <CookiePolicyPage />
    </main>
  );
}
