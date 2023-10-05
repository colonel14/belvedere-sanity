import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { PortableText } from "../portabletext";
import { format } from "date-fns";

async function EventDetailsPage({ event: singleEvent }) {
  return (
    <div className="details__page">
      <div className="container">
        <div className="details__page-hero">
          <Image
            src={urlFor(singleEvent.mainImage).url() || "/details-hero.jpg"}
            fill
            alt="hero image"
            unoptimized
            className="object-cover"
            priority
          />
        </div>
        <div className="details__page-inner">
          <h2 className="details__page-title">{singleEvent.title}</h2>
          <time className="details__page-date">
            <Image
              src={"/calendar-icon.svg"}
              width={20}
              height={17}
              alt="calendar icon"
            />
            {format(new Date(singleEvent._createdAt), "yyyy-MM-dd")}
          </time>
          <div className="details__page-content">
            <PortableText value={singleEvent.body} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPage;
