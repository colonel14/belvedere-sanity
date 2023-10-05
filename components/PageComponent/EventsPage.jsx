"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import NewsCard from "../NewsCard";

import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import qs from "query-string";

function LatestNewsPage({ events: eventsList }) {
  const router = useRouter();
  const params = useSearchParams();

  const searchQuery = params.get("q");
  const [searchValue, setSearchValue] = useState(searchQuery || "");
  const deboundedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    const query = {
      q: deboundedValue,
    };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [deboundedValue, router]);

  return (
    <div>
      <div className="secondary__hero">
        <div className="container">
          <div className="secondary__hero-inner">
            <h1>Events</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="app__section-wrapper">
        <div className="container">
          <div className="filters">
            <div className="app__input-withIcon">
              <input
                className="app__input"
                name="search"
                placeholder="Search.."
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="app__input-icon" />
            </div>
          </div>
          <div className="news__list">
            {eventsList.map((item) => {
              return <NewsCard key={item._id} item={item} isEvent={true} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsPage;
