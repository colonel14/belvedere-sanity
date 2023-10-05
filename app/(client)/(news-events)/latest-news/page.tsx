import "@/styles/single-page.css";
import "@/styles/news-events.css";
import { Metadata } from "next";
import { getAllCategories, getAllNews } from "@/lib/client";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const dynamic = "force-dynamic";

import LatestNewsPage from "@/components/PageComponent/LatestNewsPage";

export const metadata: Metadata = {
  title: "Latest News",
};
export default async function LatestNews({ searchParams }: any) {
  const { category, q } = searchParams;
  const allNews = `_type == "post"`;
  const categoryFilter = category
    ? `&& "${category}" in categories[]->title`
    : "";

  const searchFilter = q ? `&& title match "${q.toLowerCase()}"` : "";

  const query = `*[${allNews}${searchFilter}${categoryFilter}]`;

  const news = await client.fetch(
    groq`${query}{..., categories[]->} | order(publishedAt desc, _createdAt desc)`
  );

  // const news = await getAllNews(query);
  const categories = await getAllCategories();

  return (
    <main className="lates__news">
      <LatestNewsPage news={news} categories={categories} />
    </main>
  );
}
