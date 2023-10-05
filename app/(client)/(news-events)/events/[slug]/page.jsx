import EventDetailsPage from "@/components/PageComponent/EventsDetailsPage";
import { getAllEventsSlugs, getEventBySlug } from "@/lib/client";
import "@/styles/news-events.css";

export async function generateStaticParams() {
  return await getAllEventsSlugs();
}

export async function generateMetadata({ params }) {
  const post = await getEventBySlug(params.slug);
  return { title: post.title };
}

async function NewsDetails({ params: { slug } }) {
  const event = await getEventBySlug(slug);

  return <EventDetailsPage event={event} />;
}

export default NewsDetails;
