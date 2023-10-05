"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function MobileMenuItem({ link }) {
  const [toggleSubMenu, setToggleSubMenu] = useState(false);

  return (
    <li
      className="app__navbar-link"
      onClick={() => setToggleSubMenu((prev) => !prev)}
    >
      <a>{link.title}</a>
      {link.sublinks && <ChevronRight className="next__level-arrow" />}
      {link.sublinks && (
        <div className={`menu__sub ${toggleSubMenu && "active"}`}>
          <div className="menu__prev-link">
            {link.title}
            <ChevronLeft className="next__level-arrow" />
          </div>
          {link.sublinks.map((column, index) => (
            <div className="menu__column" key={index}>
              <ul>
                {column.map((sublink, subLinkIdx) => (
                  <li
                    key={subLinkIdx}
                    className={`menu__sub-link ${
                      sublink.isTitle ? "menu__column-title" : ""
                    }`}
                  >
                    <Link href={sublink.href}>{sublink.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

export default MobileMenuItem;
