import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const TermsAndConditionPage = dynamic(
  () => import("@/components/PageComponent/TermsAndConditionPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Terms & Condition",
};
export default async function TermsAndCondition() {
  return (
    <main>
      <TermsAndConditionPage />
    </main>
  );
}
