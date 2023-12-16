import urlFor from "@/lib/urlFor";
import RelatedList from "../RelatedList";
import Image from "next/image";
import { PortableText } from "../portabletext";
import { getRelatedList } from "@/lib/client";

async function NewsDetailsPage({ post: singleNew }) {
  const newsList = await getRelatedList(singleNew.categories[0].title);

  return (
    <div className="details__page news__details">
      <div className="container">
        <div className="details__page-hero">
          <Image
            src={urlFor(singleNew.mainImage).url() || "/details-hero.jpg"}
            fill
            alt="hero image"
            unoptimized
            className="object-cover"
            priority
          />
        </div>
        <div className="details__page-inner">
          <div className="flex flex-col lg:grid lg:grid-cols-12">
            <div className="col-span-9 app__section-left">
              <h2 className="details__page-title">{singleNew.title}</h2>
              <time className="details__page-date">
                <Image
                  src={"/calendar-icon.svg"}
                  width={20}
                  height={17}
                  alt="calendar icon"
                />
                {/* {format(new Date(singleNew._createdAt), "yyyy-MM-dd")} */}
                {singleNew._createdAt}
              </time>
              <div className="details__page-content">
                <PortableText value={singleNew.body} />
              </div>
            </div>
            <div className="col-span-3 app__section-right">
              <div className="related__news">
                <h3 className="related__title">Related</h3>
                <RelatedList newsList={newsList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailsPage;
