import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="container">
      <footer>
        <div id="footer__top">
          <div className="footer__top-row">
            <div className="footer__heading">Hot links</div>
            <div className="footer__links">
              <ul className="footer__links-column">
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/latest-news">Latest news</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
              <ul className="footer__links-column">
                <li>
                  <Link href="/portals">Portals</Link>
                </li>
                <li>
                  <Link href="/life-and-learning">Life & learning</Link>
                </li>
                <li>
                  <Link href="/admissions">Admissions</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__top-row">
            <div className="footer__heading">Find us</div>
            <p className="footer__text">
              If you would like to speak to somebody in person about your
              child’s application, contact us on any of the following:
            </p>
            <ul className="footer__contact-links">
              <li>
                <Link href="http://maps.google.com/?q=cairo-SuezRoad,AcrossMadinaty&SARAI,Cairo,Egypt.">
                  <strong>Address</strong>{" "}
                  cairo-SuezRoad,AcrossMadinaty&SARAI,Cairo,Egypt.
                </Link>
              </li>
              <li>
                <Link href="tel:+201070000353">
                  <strong>Phone</strong> +20 10 70000 353
                </Link>
              </li>
              <li>
                <Link href="mailto:enquiries@belvedereschoolcairo.com">
                  <strong>Email</strong> enquiries@belvedereschoolcairo.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__top-row footer__socials">
            <Link href="/">
              <Image
                width={24}
                height={24}
                src="/facebook-icon.svg"
                alt="facebook icon"
              />
            </Link>
            <Link href="/">
              <Image
                width={24}
                height={24}
                src="/instagram-icon.svg"
                alt="instagram icon"
              />
            </Link>
            <Link href="/">
              <Image
                width={24}
                height={24}
                src="/linkedin-icon.svg"
                alt="linkedin icon"
              />
            </Link>
            <Link href="/">
              <Image
                width={24}
                height={24}
                src="/youtube-icon.svg"
                alt="youtube icon"
              />
            </Link>
          </div>
        </div>
        <div id="footer__bottom">
          <Link href="/">
            <Image
              src="/footer-logo.svg"
              width={148}
              height={37.5}
              alt="logo"
            />
          </Link>
          <div className="footer__bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
