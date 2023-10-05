"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import Section from "../Section";
import KnowMore from "../KnowMore";

const linksList = [
  {
    name: "A Broad Curriculum",
    href: "/life-and-learning/broad-curriculum",
  },
  {
    name: "Teaching Methodology",
    href: "/life-and-learning/teaching-methodology",
  },
  {
    name: "Extra-curricular Activities",
    href: "/life-and-learning/extra-curricular-activities",
  },
];

function AcademicPage({ result }) {
  return (
    <div>
      <PageHero imageSrc="/hero-1.jpg" title="Academic" color="#C33734" />
      <Section data={result} />
      <Image
        src="/footer-img.jpg"
        width={100}
        height={100}
        className="w-full h-[245px] lg:h-[495px] object-cover grayscale"
        unoptimized
        alt="footer image"
      />
      <KnowMore linksList={linksList} />
    </div>
  );
}

export default AcademicPage;
