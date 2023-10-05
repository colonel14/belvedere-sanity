"use client";

import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import { lifeLearningLinks } from "@/data";

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
    name: "Academic",
    href: "/life-and-learning/academic",
  },
];

function ExtracurricularActivitiesPage() {
  const list = [
    {
      image: "/sports-img.jpg",
      title: (
        <>
          <span className="card__link-title-underline !after:bg-[#FFB842]">
            Sports
          </span>
        </>
      ),
      description:
        "Sports education is a significant pillar of the academic journey, and at Belvedere, we have established comprehensive sports facilities and academic programmes that seamlessly integrate sports instruction. Belvedere... pupils will have access to facilities that allow them to practise a myriad of sports within a safe and healthy environment. Physical activity through sports increases physical abilities and is also linked with improved motor and mental skills. Moreover, the nature of individual and team sports introduces pupils to routines and practices crucial to developing and maintaining healthier lifestyles",
      href: "/life-and-learning/extra-curricular-activities/sports",
      color: "#FFB842",
      titleColor: "#0F213F",
    },
    {
      image: "/music-img.jpg",
      title: (
        <>
          <span className="card__link-title-underline !after:bg-[#65D2DE]">
            Music
          </span>
        </>
      ),
      description:
        "Just like Mathematics, Music is considered by many a universal language, and we feel the same at Belvedere. Our pupils will attend regular music lessons to discover global rhythms, tempos, and instruments that will fuel their love...",
      href: "/life-and-learning/extra-curricular-activities/music",
      color: "#6AC45B",
      titleColor: "#0F213F",
    },
    {
      image: "/drama-img.jpg",
      title: (
        <>
          <span className="card__link-title-underline">Drama</span>
        </>
      ),
      description:
        "Drama at Belvedere is more than annual performances; it is a means for our pupils to develop creative abilities, find their own unique voices, and practise self-expression. We encourage our pupils to come together through drama to...",
      href: "/life-and-learning/extra-curricular-activities/drama",
      color: "#FB491C",
      titleColor: "#0F213F",
    },
    {
      image: "/art-design-img.jpg",
      title: (
        <>
          <span className="card__link-title-underline">Art & Design</span>
        </>
      ),
      description:
        "On the surface, learning through the arts teaches pupils about colour, layout, perspective, and balance, but beneath all that, it carries a much bigger influence on their academic and personal growth. From developing motor, verbal,...",
      href: "/life-and-learning/extra-curricular-activities/art-and-design",
      color: "#FFB842",
      titleColor: "#0F213F",
    },
    {
      image: "/trips-img.jpg",
      title: (
        <>
          <span className="card__link-title-underline">Trips</span>
        </>
      ),
      description:
        "School trips at Belvedere are an indispensable aspect of the pupils’ journeys. Acting as both a complementary learning tool and a social activity, trips provide pupils with real-life interpretations of the topics they are learning. While our...",
      href: "/life-and-learning/extra-curricular-activities/trips",
      color: "#65D2DE",
      titleColor: "#0F213F",
    },
  ];
  return (
    <div>
      <PageHero
        imageSrc="/extra-curricular-activities-hero.jpg"
        title="Extra-curricular Activities"
        color="#FF9BC2"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                <Heading
                  title="To Enhance."
                  subtitle="We care"
                  titleColor="#FF9BC2"
                  subtitleColor="#FFB842"
                />
                <p className="page__text">
                  Along with enriching educational visits and events tailored to
                  complement classroom-based learning, Belvedere School will
                  offer extracurricular and after-school activities as far as
                  expertise and numbers allow. It is anticipated that pupils
                  will take full part in these activities. However, some
                  activities such as dance,musical instruments, martial arts,
                  and fencing will require the services of specialists. When
                  this is the case, an extra fee is charged for these voluntary
                  activities
                </p>
                <div className="mt-[80px]">
                  <CardsList list={list} />
                </div>
              </div>
              <div className="col-span-3 app__section-right">
                <PageLinksList links={lifeLearningLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/broad-curriculum-footer.jpg"
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

export default ExtracurricularActivitiesPage;
