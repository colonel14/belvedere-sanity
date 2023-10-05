import Image from "next/image";
import Link from "next/link";

function PortalsPupilsPage() {
  return (
    <div className="protals__page">
      <div className="portals__page-left">
        <Link href="/">
          <Image
            src="/portals-logo.svg"
            width={106}
            height={94}
            className="portals__logo"
            alt="logo"
          />
        </Link>

        <div className="portals__form">
          <form>
            <input className="app__input" placeholder="Username" type="text" />
            <input
              className="app__input"
              placeholder="Password"
              type="password"
            />
            <button className="submit__button">Sign in</button>
          </form>
          <div className="portals__link">
            <Link href="/portals/parents">Sign in as parent</Link>
            <Link href="/portals/staff">Sign in as a staff member</Link>
          </div>
          <p className="portals__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitadtion ullamco laboris nisi ut
          </p>
        </div>
      </div>
      <div className="portals__page-right relative">
        <Image src="/portals-placeholder.jpg" fill alt="portals placeholder" />
      </div>
    </div>
  );
}

export default PortalsPupilsPage;
