"use client";
import Image from "next/image";
import { useState } from "react";

import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigation = [
    {
      title: "about us",
      href: "/about-us",
      sublinks: [
        [
          {
            title: "Primary Head’s Welcome",
            href: "/about-us/primary-head-welcome",
          },
          {
            title: "Our History",
            href: "/about-us/our-history",
          },
          {
            title: "Vision & Mission",
            href: "/about-us/vision-and-mission",
          },
          {
            title: "Values and Ethos",
            href: "/about-us/values-and-ethos",
          },
        ],
      ],
    },
    {
      title: "Life & Learning",
      href: "/life-and-learning",
      sublinks: [
        [
          {
            title: "Academic",
            href: "/life-and-learning/academic",
            isTitle: true,
          },
          {
            title: "A Broad Curriculum",
            href: "/life-and-learning/broad-curriculum",
          },
          {
            title: "Early Years Foundation Stage",
            href: "/life-and-learning/broad-curriculum/early-years-foundation-stage",
          },
          {
            title: "Primary Stage",
            href: "/life-and-learning/broad-curriculum/primary-stage",
          },
          {
            title: "Secondary School",
            href: "/life-and-learning/broad-curriculum/secondary-school",
          },
          {
            title: "Teaching Methodology",
            href: "/life-and-learning/teaching-methodology",
          },
        ],
        [
          {
            title: "Extra-curricular Activities",
            href: "/life-and-learning/extra-curricular-activities",
            isTitle: true,
          },
          {
            title: "Sports",
            href: "/life-and-learning/extra-curricular-activities/sports",
          },
          {
            title: "Music",
            href: "/life-and-learning/extra-curricular-activities/music",
          },
          {
            title: "Drama",
            href: "/life-and-learning/extra-curricular-activities/drama",
          },
          {
            title: "Art & Design",
            href: "/life-and-learning/extra-curricular-activities/art-and-design",
          },
          {
            title: "Trips",
            href: "/life-and-learning/extra-curricular-activities/trips",
          },
        ],
      ],
    },
    {
      title: "Admissions",
      href: "/",
    },
    {
      title: "News & Events",
      href: "/",
      sublinks: [
        [
          {
            title: "Latest News",
            href: "/latest-news",
          },
          {
            title: "Events",
            href: "/events",
          },
        ],
      ],
    },
    {
      title: "Portals",
      href: "/",
      sublinks: [
        [
          {
            title: "Pupils",
            href: "/portals/pupils",
          },
          {
            title: "Parents",
            href: "/portals/parents",
          },
          {
            title: "Staff",
            href: "/portals/staff",
          },
        ],
      ],
    },
  ];

  return (
    <nav className="app__navbar">
      <div className="container">
        <div className="app__navbar-inner">
          <div className="app__navbar-logo">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={150}
                height={70}
                alt="logo"
                unoptimized
                priority
              />
            </Link>
          </div>
          <ul className="app__navbar-links">
            {navigation.map((item, idx) => (
              <li className="app__navbar-link" key={idx}>
                <Link href={item.href}>{item.title}</Link>
                {item.sublinks && (
                  <div className="menu__sub">
                    {item.sublinks.map((column, index) => (
                      <div className="menu__column" key={index}>
                        <ul>
                          {column.map((sublink, subLinkIdx) => (
                            <li
                              key={subLinkIdx}
                              className={
                                sublink.isTitle ? "menu__column-title" : ""
                              }
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
            ))}

            <ul className="app__navbar-bottom_menu">
              <li>
                <Link href="/">Our prospectus</Link>
              </li>
            </ul>
          </ul>
          <div className="app__navbar-smallscreen">
            <Menu
              onClick={() => setToggleMenu(true)}
              className="app__navbar-menuicon"
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <X
                  onClick={() => setToggleMenu(false)}
                  className="ovarlay__close"
                />
                <ul className="app__navbar-smallscreen-links">
                  {navigation.map((item, idx) => (
                    <MobileMenuItem link={item} key={idx} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
