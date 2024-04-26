"use client";

import PageHero from "../PageHero";
import Heading from "../Heading";
import { ChevronRight, Paperclip } from "lucide-react";

function CareersPage() {
  return (
    <div>
      <PageHero imageSrc="/careers-hero.jpg" title="Careers" color="#C33734" />
      <section className="app__section">
        <div className="container">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center">
              <Heading
                title={
                  <>
                    developing the
                    <br />
                    next generation
                  </>
                }
                subtitle="Join us in"
                titleColor="#65D2DE"
                subtitleColor="#44508D"
              />
            </div>
            <p className="page__text text-center">
              At Belvedere School in Cairo, we are committed to fostering an
              educational environment where passion meets purpose. Our faculty
              and staff play a crucial role in shaping the futures of our
              students, inspiring them to reach their fullest potential. We
              invite you to join our dynamic team if you&apos;re eager to make a
              significant impact in a supportive and innovative community. We
              offer competitive compensation, professional development
              opportunities, and a vibrant workplace culture that values
              diversity, creativity, and collaboration. Join us in our mission
              to provide a world-class education and nurture the leaders of
              tomorrow.
            </p>
            <div className="mt-20">
              <form>
                <div className="mb-16">
                  <label className="app__label">Your Name</label>
                  <div className="input__group">
                    <input
                      className="app__input"
                      name="firstname"
                      placeholder="First Name"
                      type="text"
                    />
                    <input
                      className="app__input"
                      name="lastname"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-16">
                  <label className="app__label">Contact info</label>
                  <div className="input__group">
                    <input
                      className="app__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                    <input
                      className="app__input"
                      name="phone"
                      placeholder="Phone Number"
                      type="tel"
                    />
                  </div>
                </div>
                <label className="app__label">CV & Cover Letter</label>
                <div className="input__group">
                  <div className="file__input">
                    <label for="cv">
                      <span>Attach CV</span> <Paperclip />
                    </label>
                    <input type="file" id="cv"></input>
                  </div>
                  <div className="file__input">
                    <label for="coverletter">
                      <span>Attach Cover Letter</span> <Paperclip />
                    </label>
                    <input
                      type="file"
                      id="coverletter"
                      name="coverletter"
                    ></input>
                  </div>
                </div>
                <div className="mt-10">
                  <button className="app__button">
                    Complete <ChevronRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
