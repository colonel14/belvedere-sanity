"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function CardItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card__link-box"
      data-aos="fade-animation"
      data-aos-duration="700"
    >
      <div className="card__link-box-image">
        <Image
          src={item.image}
          height={548}
          width={504}
          className="h-full w-full object-cover"
          alt={item.title}
          unoptimized
        />
      </div>
      <div className="card__link-box-info">
        {item.grade && <span className="card__link-grade">{item.grade}</span>}

        <h3
          className={`card__link-title`}
          style={{
            color: item.titleColor ? item.titleColor : item.color,
            "--accent-color": item.color,
          }}
        >
          {item.title}
        </h3>
        <p className="card__link-description line-clamp-4">
          {item.description}
        </p>
        <Link
          href={item.href}
          className={`group card__link-link text-['${item.color}']`}
          style={{ color: item.color }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Learn More
          <span
            className={`w-11 h-11 rounded border card__link-icon`}
            style={{
              borderColor: item.color,
              backgroundColor: isHovered ? item.color : "transparent",
              color: isHovered ? "#fff" : item.color,
            }}
          >
            <ChevronRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default CardItem;
