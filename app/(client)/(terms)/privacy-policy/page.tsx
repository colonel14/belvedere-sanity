import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PrivacyPolicyPage = dynamic(
  () => import("@/components/PageComponent/PrivacyPolicyPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Privacy Policy",
};
export default async function PrivacyPolicy() {
  return (
    <main>
      <PrivacyPolicyPage />
    </main>
  );
}
