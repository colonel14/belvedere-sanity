"use client";

import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import LearningArea from "../LearningArea";
import { lifeLearningLinks } from "@/data";
import React from "react";
import { PortableHeading } from "../portableHeading";
import { PortableText } from "../portabletext";
import urlFor from "@/lib/urlFor";

function EarlyYearsFoundationPage({ result }) {
  const list = [
    {
      name: "Communication & Language",
      bgColor: "#65D2DE",
    },
    {
      name: "Physical Development",
      bgColor: "#FFB842",
    },
    {
      name: "Personal, Social, Emotional Development",
      bgColor: "#6AC45B",
    },
  ];
  const list2 = [
    {
      name: "Literacy",
      bgColor: "#FF9BC2",
    },
    {
      name: "Mathematics",
      bgColor: "#FB491C",
    },
    {
      name: "Excessive Art & Design",
      bgColor: "#44508D",
    },
    {
      name: "Understanding the World",
      bgColor: "#046A38",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc={
          (result?.heroImg && urlFor(result?.heroImg).url()) ||
          "/early-years-hero.jpg"
        }
        title={
          <>
            Early Years <br />
            Foundation Stage
          </>
        }
        color="#FFB842"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                {result?.components?.map((block, i) => {
                  switch (block._type) {
                    case "heading":
                      return (
                        <React.Fragment key={i}>
                          <div className="section__heading">
                            <Heading
                              title={
                                <PortableHeading value={block.headingTitle} />
                              }
                              titleColor={block.headingTitleColor.hex}
                              subtitle={block.headingSubtitle}
                              subtitleColor={block.headingSubtitleColor.hex}
                            />
                          </div>
                        </React.Fragment>
                      );
                    case "contentText":
                      return (
                        <React.Fragment key={i}>
                          <PortableText value={block.body} />
                        </React.Fragment>
                      );
                    case "learningAreas":
                      return (
                        <React.Fragment key={i}>
                          <div>
                            <LearningArea
                              title={block.areaTitle}
                              list={block.areaList || list}
                            />
                          </div>
                        </React.Fragment>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
              <div className="col-span-3 app__section-right">
                <PageLinksList links={lifeLearningLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EarlyYearsFoundationPage;
