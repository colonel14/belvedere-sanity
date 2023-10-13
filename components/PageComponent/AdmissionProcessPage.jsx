import Link from "next/link";
import PageHero from "../PageHero";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const admissionsList = [
  {
    _id: 1,
    order: "first",
    icon: "/admission-icon-1.svg",
    color: "#2B52AA",
    title: "Submit an application with required documentation",
    body: "Submit an application and all supporting documents. Applications will not be considered until all required documents have been submitted. We will acknowledge receipt of each application and hold it on file for entry to the requested academic year.",
  },
  {
    _id: 2,
    order: "Second",
    icon: "/admission-icon-2.svg",
    color: "#6AC45B",
    title: "Assessment scheduled and registration fee paid",
    body: "Assessments will be scheduled subject to the availability of places. It is possible that an applicant will be assessed and offered a place on the waiting list. The registration fee must be settled, on or before the date of the assessment. The registration fee is non- refundable and does not",
  },
  {
    _id: 3,
    order: "third",
    icon: "/admission-icon-3.svg",
    color: "#44508D",
    title: "Assessment & interviews ( Both parents present )",
    body: "Foundation Stage use classroom observation to assess ability while standardised CAT tests are used throughout the rest of the school to assess student ability.",
  },
  {
    _id: 4,
    order: "Fourth",
    icon: "/admission-icon-4.svg",
    color: "#65D2DE",
    title: "Places offered",
    body: "Places are offered subject to successful completion of the application procedures and of an academic entrance examination in English, Maths and Non- Verbal Reasoning. A formal letter is issued with other necessary paperwork for your completion and return.",
  },
  {
    _id: 5,
    order: "Fifth",
    icon: "/admission-icon-5.svg",
    color: "#FB491C",
    title: "Assessment & interviews ( Both parents present )",
    body: (
      <>
        A term&apos;s fees (admissions fees) and supply fees are payable to
        reserve the place.
        <br />
        You are invoiced for:
        <ul>
          <li>Supply and Admissions Fees</li>
          <li>One term&apos;s Tuition Fees</li>
          <li>Refundable Deposit</li>
        </ul>
      </>
    ),
  },
];

function AdmissionProcessPage() {
  return (
    <div>
      <PageHero
        imageSrc="/admission-hero.jpg"
        title={
          <>
            Admissions <br />
            Process
          </>
        }
        color="#6AC45B"
      />
      <section className="app__section">
        <div className="container">
          <div className="admission__wrapper">
            <div className="admissions__list">
              {admissionsList.map((item) => (
                <div
                  key={item._id}
                  className="admission__item"
                  style={{
                    "--accent-color": item.color,
                  }}
                >
                  <div className="admission__item-header">
                    <span className="admission__item-order">{item.order}</span>
                    <Image
                      src={item.icon}
                      width={55}
                      height={55}
                      alt="icon"
                      className="admission__item-icon"
                    />
                    <h3 className="admission__item-title">{item.title}</h3>
                  </div>
                  <div className="admission_item-body">{item.body}</div>
                </div>
              ))}
            </div>
            <Link href="/" className="app__button">
              Apply Now <ChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdmissionProcessPage;
