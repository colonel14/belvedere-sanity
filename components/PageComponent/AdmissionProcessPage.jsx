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
    title: "Register Online",
    body: (
      <>
        Press on “APPLY NOW” to create your personal account. An email will be
        sent to you with your log in information and the link to complete the
        online registration form.
        <br />
        <strong>Note:</strong> <br />
        Currently, registration is only available for FS1, FS2, and Years 1 to
        5.
      </>
    ),
  },
  {
    _id: 2,
    order: "Second",
    icon: "/admission-icon-2.svg",
    color: "#6AC45B",
    title: "Pay Assessment Fees",
    body: (
      <>
        Payment details will be sent via email. <br />
        <strong>Note: </strong>
        <br />• Assessments fees are EGP 2500 per child. <br /> • Payment must
        be settled before the assessment date will be announced.
        <br /> • If the child is accepted, the assessment fees will be deducted
        from the tuition fees. <br />• If the child is not offered a place, the
        assessment fees will be refunded, subject to a 20% administrative fee
        deduction.
        <br /> • In case of non-acceptance, assessment papers cannot be
        reviewed, or shared with the parents under any circumstances, to ensure
        the continued integrity of the admissions process.
      </>
    ),
  },
  {
    _id: 3,
    order: "third",
    icon: "/admission-icon-3.svg",
    color: "#44508D",
    title: "Attend the Assessment ",
    body: (
      <>
        Once payment is received, we will promptly communicate the assessment
        time and date for your child via email. This assessment will be tailored
        to his/her suitable school year group.
      </>
    ),
  },
  {
    _id: 4,
    order: "Fourth",
    icon: "/admission-icon-4.svg",
    color: "#65D2DE",
    title: "Meet & Greet ",
    body: (
      <>
        Within 5 working days, shortlisted applicants and both parents will be
        requested to attend a Meet & Greet with the School Leadership Team.
        Within 10 working days of the meeting, a formal email will be sent,
        stating the outcome of the admissions process.
      </>
    ),
  },
  {
    _id: 5,
    order: "Fifth",
    icon: "/admission-icon-5.svg",
    color: "#FB491C",
    title: "Enrol & Pay ",
    body: (
      <>
        Secure your child&apos;s place at Belvedere School, Cairo by completing
        the enrolment procedures. This includes submitting all required official
        documents and making payment for one term&apos;s tuition fees by the
        specified deadline.
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
            <Link href="https://lms.belvedereschoolcairo.com/en/applicantregister/register"  className="app__button">
              Apply Now <ChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdmissionProcessPage;
