"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardItem from "./ui/CardItem";

function CardsList({ list }) {
  return (
    <div className="card__links-list">
      {list.map((item) => (
        <CardItem item={item} key={item.href} />
      ))}
    </div>
  );
}

export default CardsList;
