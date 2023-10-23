"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function PageLinksList({ links = [] }) {
  const pathname = usePathname();

  function renderSubMenu(sublinks) {
    if (!sublinks) return null;

    return (
      <ul>
        {sublinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                `${item?.sublinks?.length ? "title__link" : ""}`,
                `${pathname === item.href ? "link__active" : ""}`
              )}
            >
              {item.title}
            </Link>
            {renderSubMenu(item.sublinks)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="page__info-list">
      <h5 className="page__list-title">Explore this section</h5>
      <ul>
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                `${item?.sublinks?.length ? "title__link" : ""}`,
                `${pathname === item.href ? "link__active" : ""}`
              )}
            >
              {item.title}
            </Link>
            {renderSubMenu(item.sublinks)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageLinksList;
