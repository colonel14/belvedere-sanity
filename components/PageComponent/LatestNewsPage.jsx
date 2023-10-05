"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NewsCard from "../NewsCard";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import qs from "query-string";
import { useDebounce } from "@/hooks/useDebounce";

function LatestNewsPage({ news, categories }) {
  const router = useRouter();
  const params = useSearchParams();

  const category = params.get("category");
  const searchQuery = params.get("q");
  const [searchValue, setSearchValue] = useState(searchQuery || "");
  const deboundedValue = useDebounce(searchValue, 500);

  const handleChange = (category) => {
    const query = { category };
    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    });

    router.push(url);
  };
  useEffect(() => {
    const query = {
      q: deboundedValue,
      category: category,
    };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [deboundedValue, router, category]);

  return (
    <div>
      <div className="secondary__hero">
        <div className="container">
          <div className="secondary__hero-inner">
            <h1>
              Latest <br /> News
            </h1>
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

            <Select onValueChange={handleChange}>
              <SelectTrigger className="select__input">
                <SelectValue placeholder="Select Category..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((item) => {
                    return (
                      <SelectItem key={item._id} value={item.title}>
                        {item.title}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="news__list">
            {news.map((item) => {
              return <NewsCard key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsPage;
