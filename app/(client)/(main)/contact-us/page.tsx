import "@/styles/single-page.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactUsPage = dynamic(
  () => import("@/components/PageComponent/ContactUsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Contact Us",
};
export default async function ContactUs() {
  return (
    <main>
      <ContactUsPage />
    </main>
  );
}
