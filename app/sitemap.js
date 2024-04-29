import { categories } from "@/constants";

const STATIC_LINKS_SITEMAP = [
  "https://belvedereschoolcairo.com",
  "https://belvedereschoolcairo.com/about-us",
  "https://belvedereschoolcairo.com/about-us/primary-head-welcome",
  "https://belvedereschoolcairo.com/about-us/our-history",
  "https://belvedereschoolcairo.com/about-us/vision-and-mission",
  "https://belvedereschoolcairo.com/about-us/values-and-ethos",
  "https://belvedereschoolcairo.com/life-and-learning",
  "https://belvedereschoolcairo.com/life-and-learning/academic",
  "https://belvedereschoolcairo.com/life-and-learning/broad-curriculum",
  "https://belvedereschoolcairo.com/life-and-learning/broad-curriculum/early-years-foundation-stage",
  "https://belvedereschoolcairo.com/life-and-learning/life-and-learning/broad-curriculum/primary-stage",
  "https://belvedereschoolcairo.com/life-and-learning/broad-curriculum/secondary-school",
  "https://belvedereschoolcairo.com/life-and-learning/teaching-methodology",
  "https://belvedereschoolcairo.com/life-and-learning/extra-curricular-activities",
  "https://belvedereschoolcairo.com/life-and-learning/extra-curricular-activities/sports",
  "https://belvedereschoolcairo.com/life-and-learning/extra-curricular-activities/music",
  "https://belvedereschoolcairo.com/life-and-learning/extra-curricular-activities/drama",
  "https://belvedereschoolcairo.com/life-and-learning/extra-curricular-activities/art-and-design",
  "https://belvedereschoolcairo.com/admission-process",
  "https://belvedereschoolcairo.com/contact-us",
  "https://belvedereschoolcairo.com/careers",
];

export default async function sitemap() {
  const BASE_URL = "https://belvedereschoolcairo.com";

  return [...STATIC_LINKS_SITEMAP].map((route) => ({
    url: route,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));
}
