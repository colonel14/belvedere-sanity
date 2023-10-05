"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function KnowMore({ linksList = [] }) {
  return (
    <div className="know__more">
      <div className="container">
        <div className="app__section-inner">
          <div className="know__more-inner">
            <div>
              <h4 className="know__more-title">Know More</h4>
            </div>
            <div className="know__more-links">
              {linksList.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.name} <ChevronRight />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowMore;
