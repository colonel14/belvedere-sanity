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
    title: "Registration",
    body: (
      <>
        Click the “Apply Now“  button to create your account. Your login details will be emailed. Use these details to fill out a Registration Form with a recent photo of your child. 
        <br />
        For the Academic Year 2024/2025 registration is only open for FSI, FSII, Years 1 to 6.
      </>
    ),
  },
  {
    _id: 2,
    order: "Second",
    icon: "/admission-icon-2.svg",
    color: "#6AC45B",
    title: "Assessment Fees",
    body: (
      <>
        Pay assessment fees via one of the following payment methods: <br />
        <br />-	Bank Transfer. 
        <br /> -	Online Payment 
        <br /> -	Cash 
        <br /> -	Visa/Mastercard
        <br/> 
        Upon the successful payment of the assessment fees, an assessment time and date will be communicated to both parents via email.
      </>
    ),
  },
  {
    _id: 3,
    order: "third",
    icon: "/admission-icon-3.svg",
    color: "#44508D",
    title: "Assessment",
    body: (
      <>
       Applicants applying for <strong>Early Years Foundation Stage (FSI & FSII) will</strong> be assessed to determine the pupil’s non-verbal cognitive abilities and social skills. 
        Applicants applying for Years 1 to 6 will be assessed in Literacy, Numeracy and Arabic.  

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
        After the assessment, a formal email will be sent within 5 working days to shortlisted applicants to set an appointment for both parents and child to meet with the Senior Leadership Team.
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
        Reserve your child&apos;s place at Belvedere School, Cairo by completing the enrolment procedures, submitting all required official documents and paying the first instalment.

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
            <p className="page__text">Welcome to the dynamic and innovative world of education at Belvedere School, Cairo! 
              We are thrilled to announce that our school is now open for admissions, and have designed a seamless and convenient online application process to ensure that every applicant has an equal opportunity to join our vibrant learning community. Our commitment to nurturing young minds, fostering creativity, and empowering learners to reach their fullest potential makes us the perfect choice for your child&apos;s educational journey. 
              Get ready to embark on a transformative experience as we invite you to explore our online application form and take the first step towards a future filled with endless possibilities for your child(ren). 
            </p>
            <h3 className=" text-blue-600 font-bold mb-5">Admissions Process:</h3>
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
