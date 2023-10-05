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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
