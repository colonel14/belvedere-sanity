import NewsDetailsPage from "@/components/PageComponent/NewsDetailsPage";
import RelatedList from "@/components/RelatedList";
import { getAllPostsSlugs, getPostBySlug, getRelatedList } from "@/lib/client";
import "@/styles/news-events.css";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

async function NewsDetails({ params: { slug } }) {
  const post = await getPostBySlug(slug);

  return <NewsDetailsPage post={post} />;
}

export default NewsDetails;
