"use client";

import PageHero from "../PageHero";
import Heading from "../Heading";
import { ChevronRight } from "lucide-react";

function ContactUsPage() {
  return (
    <div>
      <PageHero
        imageSrc="/contact-hero.jpg"
        title="Contact us"
        color="#FFB842"
      />
      <section className="app__section">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <Heading
                title="HEARING FROM YOU"
                subtitle="WE LOOK FORWARD TO"
                titleColor="#44508D"
                subtitleColor="#FF9BC2"
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
            <div className=" max-w-[80%] mx-auto mt-20">
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
                  <input
                    className="app__input"
                    name="department"
                    placeholder="Department"
                    type="text"
                  />
                </div>
                <label className="app__label">Message</label>
                <textarea
                  className="app__textarea"
                  placeholder="Do You Have Any Further Questions?"
                  rows={9}
                ></textarea>
                <button className="app__button">
                  Complete <ChevronRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
