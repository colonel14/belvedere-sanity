import { getPage } from "@/lib/client";
import "@/styles/single-page.css";
import { Metadata } from "next";
// import { draftMode } from "next/headers";

import dynamic from "next/dynamic";
// import PreviewProvider from "@/providers/PreviewProvider";
// import PreviewPage from "@/components/PreviewPage";

export const revalidate = 60;

const OurHistoryPage = dynamic(
  () => import("@/components/PageComponent/OurHistoryPage")
);

export const metadata: Metadata = {
  title: "Our History",
};

export default async function OurHistory() {
  const result = await getPage("Our History");

  // const isDraftMode = draftMode().isEnabled;

  // if (isDraftMode) {
  //   return (
  //     <PreviewProvider>
  //       <PreviewPage page={result} title="Our History" />
  //     </PreviewProvider>
  //   );
  // }

  return (
    <main>
      <OurHistoryPage result={result} />
    </main>
  );
}
