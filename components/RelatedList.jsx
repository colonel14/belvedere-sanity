import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RelatedList({ newsList }) {
  return (
    <div className="related__list">
      {newsList.map((item) => {
        return (
          <Link
            key={item._id}
            href={`/latest-news/${item.slug.current}`}
            className="related__card"
          >
            <div className="related__card-img">
              <Image
                src={urlFor(item.mainImage).url()}
                fill
                alt="news image"
                unoptimized
                className="object-cover"
              />
            </div>
            <h2 className="related__card-title line-clamp-1">{item.title}</h2>
            <p className="related__card-details line-clamp-2">{item.excerpt}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default RelatedList;
