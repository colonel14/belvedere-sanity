import Image from "next/image";
import Link from "next/link";
import React from "react";
import urlFor from "@/lib/urlFor";

function NewsCard({ item, isEvent }) {

  return (
    <Link
      href={
        isEvent
          ? `/events/${item.slug.current}`
          : `/latest-news/${item.slug.current}`
      }
      className="news__card"
    >
      <div className="news__card-img">
        <Image
          src={
            isEvent
              ? urlFor(item.mainImage).url()
              : urlFor(item.mainImage).url()
          }
          fill
          alt="news image"
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="news__card-info">
        {!isEvent &&
          item.categories &&
          item.categories.length &&
          item.categories.map((category) => (
            <span key={category._id} className="news__card-category">
              {category.title}
            </span>
          ))}
        <h2 className="news__card-title">{item.title}</h2>
        <p className="news__card-details line-clamp-2">{item.excerpt}</p>
        <time className="news__card-date">
          <Image
            src="/calendar-icon.svg"
            width={20}
            height={17}
            alt="calendar icon"
          />
          {/* {format(new Date(item._createdAt), "yyyy-MM-dd")} */}
          {item._createdAt}
        </time>
      </div>
    </Link>
  );
}

export default NewsCard;
