// ./nextjs-app/app/components/PreviewPost.tsx

"use client";

import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { pageSlugquery, pagequery } from "@/lib/groq";
import PageComponent from "./PageComponent";
export default function PreviewPage({ page, title }: any) {
  const [data] = useLiveQuery(page, pagequery, { title });

  console.log(data);
  return <PageComponent result={data} />;
}
