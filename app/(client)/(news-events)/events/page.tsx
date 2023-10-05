import { client } from "@/lib/sanity.client";
import { Metadata } from "next";
import { groq } from "next-sanity";

export const dynamic = "force-dynamic";

import EventsPage from "@/components/PageComponent/EventsPage";

export const metadata: Metadata = {
  title: "Events",
};
export default async function Events({ searchParams }: any) {
  const { q } = searchParams;
  const allEvents = `_type == "event"`;

  const searchFilter = q ? `&& title match "${q.toLowerCase()}"` : "";

  const query = `*[${allEvents}${searchFilter}]`;

  const events = await client.fetch(
    groq`${query}{...} | order(publishedAt desc, _createdAt desc)`
  );

  return (
    <main className="events">
      <EventsPage events={events} />
    </main>
  );
}
