import {
  categoryquery,
  newsquery,
  pagequery,
  patheventsquery,
  pathquery,
  relatedquery,
  singleEventQuery,
  singlequery,
} from "./groq";
import { client } from "./sanity.client";

export async function getPage(title: string) {
  return (
    (await client.fetch(pagequery, { title }, {next: {revalidate: 10}})) || {}
  );
}

export async function getAllNews(category: string) {
  return (
    (await client.fetch(newsquery, { category }, { cache: "no-store" })) || []
  );
}
export async function getAllCategories() {
  return (await client.fetch(categoryquery, { cache: "no-store" })) || [];
}

export async function getRelatedList(category: string) {
  return (
    (await client.fetch(relatedquery, { category }, { cache: "no-store" })) ||
    {}
  );
}

export async function getPostBySlug(slug: string) {
  return (
    (await client.fetch(singlequery, { slug }, { cache: "no-store" })) || {}
  );
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery, { cache: "no-store" })) || [];
    return slugs.map((slug: any) => ({ slug }));
  }
  return [];
}

export async function getEventBySlug(slug: string) {
  return (
    (await client.fetch(singleEventQuery, { slug }, { cache: "no-store" })) ||
    {}
  );
}

export async function getAllEventsSlugs() {
  if (client) {
    const slugs =
      (await client.fetch(patheventsquery, { cache: "no-store" })) || [];
    return slugs.map((slug: any) => ({ slug }));
  }
  return [];
}
