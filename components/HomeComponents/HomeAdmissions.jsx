import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeAdmissions() {
  return (
    <section className="home__admissions">
      <div className="container">
        <div className="home__admissions-inner">
          <div className="home__admissions-image">
            <Image
              src="/admissions-placeholder.jpg"
              className="object-cover"
              fill
              alt="admissions placeholder"
            />
          </div>
          <div className="home__admissions-info">
            <div className="home__admissions-heading">
              <span>Admissions</span>
              <h3>
                <span className="text__underline">Join us </span>
                at Belvedere <br /> school cairo
              </h3>
            </div>
            <p className="main__text">
              and embark on a journey of discovery, growth, and achievement.
              Together, we will empower your child to thrive academically,
              flourish creatively, and become a confident, compassionate, and
              well-rounded individual ready to make a positive impact on the
              world.
            </p>
            <div className="home__admissions-links">
              <Link
                href="/life-and-learning/broad-curriculum/early-years-foundation-stage"
                className="admission__link"
              >
                <span>
                  <span className="admission__link-title">Early stage</span>
                  <span className="admission__link-grade">FS I & FS II</span>
                </span>
                <ChevronRight />
              </Link>
              <Link
                href="/life-and-learning/broad-curriculum/primary-stage"
                className="admission__link"
              >
                <span>
                  <span className="admission__link-title">primary</span>
                  <span className="admission__link-grade">Y1 - Y5</span>
                </span>
                <ChevronRight />
              </Link>
              <Link
                href="/life-and-learning/broad-curriculum/secondary-school"
                className="admission__link"
              >
                <span>
                  <span className="admission__link-title">secondary</span>
                  <span className="admission__link-grade">Y7 - Sixth Form</span>
                </span>
                <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAdmissions;
